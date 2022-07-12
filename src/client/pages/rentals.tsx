import React from 'react';
import { getCity } from '@frontend/utils/getCity';
import RentalsPage from '@frontend/components/pages/rentals/RentalsPage';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { PageProps } from '@frontend/pages/_app';
import { getAllRentalsForCity } from '@frontend/utils/loaders';
import clearify from '@frontend/utils/clearify';

type HomePageProps = {
  rentals: ICrudRental[];
};

const Rentals: React.FC<HomePageProps & PageProps> = ({ rentals, city }) => {
  return <RentalsPage />;
};

export async function getServerSideProps(
  context,
): Promise<{ props: HomePageProps & PageProps }> {
  const rentals = await getAllRentalsForCity(context.req.session.city);
  return {
    props: {
      rentals,
      city: getCity(context.req.session.city),
      ...clearify({
        seo_title: 'Найти ренталов на карте',
        seo_description: 'Ренталы на карте онлайн',
        seo_keywords: null,
        site_url: process.env.SITE_URL,
      }),
    },
  };
}

export default Rentals;
