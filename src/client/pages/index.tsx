import React from 'react';
import { NextPage } from 'next';
import HomePage from '@frontend/components/pages/home/HomePage';
import { RentalsProvider } from '@frontend/providers/rentals.provider';
import { PromotionsProvider } from '@frontend/providers/promotions.provider';
import { ProductsProvider } from '@frontend/providers/products.provider';
import { CityProvider } from '@frontend/providers/city.provider';
import { PageWithCity } from '@frontend/dtos/PageWithCity';
import { PageProps } from '@frontend/dtos/PageProps';
import Header from '@frontend/components/Header';
import { getCity } from '@frontend/utils/getCity';

type HomeProps = PageProps<PageWithCity>;

const Home: NextPage = ({ city }: PageWithCity) => {
  return (
    <CityProvider currentCity={city}>
      <ProductsProvider>
        <PromotionsProvider>
          <RentalsProvider>
            <Header />
            <HomePage />
          </RentalsProvider>
        </PromotionsProvider>
      </ProductsProvider>
    </CityProvider>
  );
};

export async function getServerSideProps(context): Promise<HomeProps> {
  return {
    props: {
      city: getCity(context.req.session.city),
    },
  };
}

export default Home;
