import React from 'react';
import { ProductsProvider } from '@frontend/providers/products.provider';
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

interface RentalPageProps extends PageWithCity {
  rental?: IRental;
}

type Props = PageProps<RentalPageProps>;

const Rental = ({ city, rental }: RentalPageProps) => {
  const router = useRouter();
  const _rental: SWRResponse<IControllerResponse<IRental>> = useSWR(
    `/api/rentals/${router.query.id}`,
    get,
  );

  const rentalData = rental || _rental?.data?.data;

  return (
    <CityProvider currentCity={city}>
      <ProductsProvider>
        <PromotionsProvider>
          <RentalsProvider>
            <Header />
            {rentalData && <RentalPage rental={rentalData} />}
          </RentalsProvider>
        </PromotionsProvider>
      </ProductsProvider>
    </CityProvider>
  );
};

export async function getServerSideProps(context): Promise<Props> {
  try {
    const id = (context.req.originalUrl.split('rentals/')[1] || '')
      .split('?')[0]
      .split('#')[0];
    if (id) {
      const responsePromise: Response = await get(
        `${process.env.API_URL}/api/rentals/${id}`,
      );
      const response = await responsePromise;
      // @ts-ignore
      const data: IRental = response.data;

      return {
        props: {
          rental: data,
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

export default Rental;
