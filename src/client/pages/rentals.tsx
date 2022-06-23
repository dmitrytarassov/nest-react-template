import React from 'react';
import { RentalsProvider } from '@frontend/providers/rentals.provider';
import Header from '@frontend/components/Header';
import { getCity } from '@frontend/utils/getCity';
import RentalsPage from '@frontend/components/pages/rentals/RentalsPage';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { PageProps } from '@frontend/pages/_app';
import { getAllRentalsForCity } from '@frontend/utils/loaders';
import { CityProvider } from '@frontend/providers/city.provider';

type HomePageProps = {
  rentals: ICrudRental[];
};

const Rentals: React.FC<HomePageProps & PageProps> = ({ rentals, city }) => {
  return (
    <RentalsProvider _rentals={rentals}>
      <RentalsPage />
    </RentalsProvider>
  );
};

export async function getServerSideProps(
  context,
): Promise<{ props: HomePageProps & PageProps }> {
  const rentals = await getAllRentalsForCity(context.req.session.city);
  return {
    props: {
      rentals,
      city: getCity(context.req.session.city),
    },
  };
}

export default Rentals;
