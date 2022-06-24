import React from 'react';
import { NextPage } from 'next';
import HomePage from '@frontend/components/pages/home/HomePage';
import { RentalsProvider } from '@frontend/providers/rentals.provider';
import { PromotionsProvider } from '@frontend/providers/promotions.provider';
import { ProductsProvider } from '@frontend/providers/products.provider';
import { CityProvider } from '@frontend/providers/city.provider';
import Header from '@frontend/components/Header';
import { getCity } from '@frontend/utils/getCity';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { loadAllPromotions, loadUniques } from '@frontend/utils/loaders';
import { PageProps } from '@frontend/pages/_app';
import { ICardProps } from '@frontend/components/Card';
import clearify from '@frontend/utils/clearify';
import { Head } from 'next/document';

type HomePageProps = {
  promotions: ICrudPromotion[];
  uniques: (ICardProps & { id: string })[];
};

const Home: NextPage = ({
  city,
  promotions,
  uniques,
}: HomePageProps & PageProps) => {
  return (
    <>
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
    </>
  );
};

export async function getServerSideProps(
  context,
): Promise<{ props: HomePageProps & PageProps }> {
  const promotions = await loadAllPromotions(
    getCity(context.req.session.city),
    true,
  );
  const uniques = await loadUniques(getCity(context.req.session.city), true);
  return {
    props: {
      city: getCity(context.req.session.city),
      promotions: clearify(promotions),
      uniques: clearify(uniques),
      seo_keywords: null,
      seo_title: null,
      seo_description: null,
      site_url: process.env.SITE_URL || null,
    },
  };
}

export default Home;
