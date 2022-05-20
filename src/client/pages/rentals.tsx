import React from 'react';
import { ProductsProvider } from '@frontend/providers/products.provider';
import { PromotionsProvider } from '@frontend/providers/promotions.provider';
import { RentalsProvider } from '@frontend/providers/rentals.provider';
import Header from '@frontend/components/Header';
import HomePage from '@frontend/components/pages/home/HomePage';
import { CityProvider } from '@frontend/providers/city.provider';
import { getCity } from '@frontend/utils/getCity';
import { PageWithCity } from '@frontend/dtos/PageWithCity';
import { PageProps } from '@frontend/dtos/PageProps';
import RentalsPage from '@frontend/components/pages/rentals/RentalsPage';

type Props = PageProps<PageWithCity>;

const Rentals = ({ city }: PageWithCity) => {
  return (
    <CityProvider currentCity={city}>
      <ProductsProvider>
        <PromotionsProvider>
          <RentalsProvider>
            <Header />
            <RentalsPage />
          </RentalsProvider>
        </PromotionsProvider>
      </ProductsProvider>
    </CityProvider>
  );
};

export async function getServerSideProps(context): Promise<Props> {
  return {
    props: {
      city: getCity(context.req.session.city),
    },
  };
}

export default Rentals;
