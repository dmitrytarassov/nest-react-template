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
import RentalPage from '@frontend/components/pages/rental/RentalPage';
import { useRouter } from 'next/router';
import useSWR, { SWRResponse } from 'swr';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { IPromotion } from '@lib/interfaces/IPromotion';
import RentalPromotionsPage from '@frontend/components/pages/rentalPromotions/RentalPromotionsPage';
import PromotionPage from '@frontend/components/pages/promotion/PromotionPage';

interface RentalPromotionsPageProps extends PageWithCity {
  rental?: IRental;
  promotions?: IPromotion[];
}

type Props = PageProps<RentalPromotionsPageProps>;

const RentalPromotions = ({
  city,
  rental,
  promotions,
}: RentalPromotionsPageProps) => {
  const router = useRouter();
  const _rental: SWRResponse<IControllerResponse<IRental>> = useSWR(
    `/api/rentals/${router.query.id}`,
    get,
  );

  const _promotions: SWRResponse<IControllerResponse<IPromotion[]>> = useSWR(
    `/api/promotions/${router.query.id}`,
    get,
  );

  const rentalData = rental || _rental?.data?.data;
  const promotionsData = promotions || _promotions?.data?.data;
  const [promotion] = promotionsData;

  return (
    <CityProvider currentCity={city}>
      <PromotionsProvider>
        <RentalsProvider>
          <Header />
          {promotionsData && (
            <PromotionPage rental={rentalData} promotion={promotion} />
          )}
        </RentalsProvider>
      </PromotionsProvider>
    </CityProvider>
  );
};

export async function getServerSideProps(context): Promise<Props> {
  try {
    const id =
      (context.req.originalUrl.split('rentals/')[1] || '').split(
        '/promotions',
      )[0] || '';
    if (id) {
      const responsePromise: Response = await get(
        `${process.env.API_URL}/api/rentals/${id}`,
      );
      const response = await responsePromise;
      // @ts-ignore
      const data: IRental = response.data;

      const promotionsResponsePromise: Response = await get(
        `${process.env.API_URL}/api/promotions?id=${id}`,
      );
      const promotionsResponse = await promotionsResponsePromise;
      // @ts-ignore
      const promotions: IPromotion[] = promotionsResponse.data || [];

      return {
        props: {
          rental: data,
          promotions,
          city: getCity(context.req.session.city),
        },
      };
    }
  } catch (e) {
    console.log(e);
    return {
      props: { statusCode: 404, city: getCity(context.req.session.city) },
    };
  }
}

export default RentalPromotions;
