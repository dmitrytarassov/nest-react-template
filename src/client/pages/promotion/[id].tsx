import React from 'react';
import { PromotionsProvider } from '@frontend/providers/promotions.provider';
import { RentalsProvider } from '@frontend/providers/rentals.provider';
import Header from '@frontend/components/Header';
import { CityProvider } from '@frontend/providers/city.provider';
import { getCity } from '@frontend/utils/getCity';
import { PageWithCity } from '@frontend/dtos/PageWithCity';
import { PageProps } from '@frontend/dtos/PageProps';
import { get } from '@frontend/utils/fetcher';
import { IRental } from '@lib/interfaces/IRental';
import { useRouter } from 'next/router';
import useSWR, { SWRResponse } from 'swr';
import { IPromotion } from '@lib/interfaces/IPromotion';
import PromotionPage from '@frontend/components/pages/promotion/PromotionPage';
import { City } from '@lib/types/City';
import ErrorPage from '@frontend/components/pages/errors/ErrorPage';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import parseRental from '@frontend/utils/parseRental';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';

interface RentalPromotionsPageProps extends PageWithCity {
  rental?: IRental;
  promotion?: IPromotion;
  statusCode?: number;
  city: City;
}

type Props = PageProps<RentalPromotionsPageProps>;

const RentalPromotions = ({
  city,
  rental,
  promotion,
  statusCode,
}: RentalPromotionsPageProps) => {
  return null;
  const router = useRouter();

  const _promotions: SWRResponse<IControllerResponse<IPromotion[]>> = useSWR(
    `/crud/promotions?filter[]=url,${router.query.id}`,
    get,
  );

  const promotionsData = _promotions?.data?.data || [];
  const [_promotion] = promotionsData;

  const _rentalData: SWRResponse<ICrudRental> = useSWR(
    _promotion?.rentalId ? `/crud/rental/${_promotion?.rentalId}` : null,
    get,
  );

  const _rental = _rentalData?.data
    ? parseRental(_rentalData?.data)
    : undefined;

  const rentalData = rental || _rental;
  const promotionData = promotion || _promotion;

  // @ts-ignore
  const _statusCode = promotionData?.statusCode || statusCode;

  return (
    <CityProvider currentCity={city}>
      <PromotionsProvider>
        <RentalsProvider>
          <Header />
          {/* @ts-ignore */}
          {promotionData && typeof _statusCode === 'undefined' ? (
            // @ts-ignore
            <PromotionPage rental={rentalData} promotion={promotionData} />
          ) : (
            <ErrorPage statusCode={_statusCode} />
          )}
        </RentalsProvider>
      </PromotionsProvider>
    </CityProvider>
  );
};

export async function getServerSideProps(context): Promise<Props> {
  try {
    const _id = (context.req.originalUrl.split('promotion/')[1] || '').split(
      '.',
    )[0];
    const _promotions: IControllerResponse<IPromotion[]> = await get(
      `${process.env.API_URL}/crud/promotions?filter[]=url,${_id}`,
    );

    const [_promotion] = _promotions?.data || [];

    //@ts-ignore
    if (_promotion && !_promotion.statusCode) {
      const _rental: ICrudRental | undefined = await get(
        `${process.env.API_URL}/crud/rental/${_promotion.rentalId}`,
      );

      return {
        props: {
          rental: parseRental(_rental),
          promotion: _promotion,
          city: getCity(context.req.session.city),
        },
      };
    }
  } catch (e) {
    console.error(e);
  }
  return {
    props: { statusCode: 404, city: getCity(context.req.session.city) },
  };
}

export default RentalPromotions;
