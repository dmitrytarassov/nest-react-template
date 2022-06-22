import React from 'react';
import { NextPage } from 'next';
import HomePage from '@frontend/components/pages/home/HomePage';
import { RentalsProvider } from '@frontend/providers/rentals.provider';
import { PromotionsProvider } from '@frontend/providers/promotions.provider';
import { ProductsProvider } from '@frontend/providers/products.provider';
import { CityProvider } from '@frontend/providers/city.provider';
import Header from '@frontend/components/Header';
import { getCity } from '@frontend/utils/getCity';
import { IPromotion } from '@lib/interfaces/IPromotion';
import { loadAllPromotions, loadUniques } from '@frontend/utils/loaders';
import { PageProps } from '@frontend/pages/_app';
import { ICardProps } from '@frontend/components/Card';

type HomePageProps = {
  promotions: IPromotion[];
  uniques: (ICardProps & { id: string })[];
};

const Home: NextPage = ({
  city,
  promotions,
  uniques,
}: HomePageProps & PageProps) => {
  return (
    <CityProvider currentCity={city}>
      <ProductsProvider>
        <PromotionsProvider _promotions={promotions}>
          <RentalsProvider>
            <Header />
            <HomePage uniques={uniques} />
          </RentalsProvider>
        </PromotionsProvider>
      </ProductsProvider>
    </CityProvider>
  );
};

export async function getServerSideProps(
  context,
): Promise<{ props: HomePageProps & PageProps }> {
  const promotions = await loadAllPromotions(context.req.session.city);
  const uniques = await loadUniques(context.req.session.city);
  return {
    props: {
      city: getCity(context.req.session.city),
      promotions,
      uniques,
    },
  };
}

export default Home;
