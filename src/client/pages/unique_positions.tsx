import React, { useEffect, useState } from 'react';
import { RentalsProvider } from '@frontend/providers/rentals.provider';
import { getCity } from '@frontend/utils/getCity';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { PageProps } from '@frontend/pages/_app';
import { getAllRentalsForCity, loadUniques } from '@frontend/utils/loaders';
import clearify from '@frontend/utils/clearify';
import UniquePositionsPage from '@frontend/components/pages/unique_positions/UniquePositions';
import { ICardProps } from '@frontend/components/Card';
import { City } from '@lib/types/City';

type UniquePositionsPageProps = {
  rentals?: ICrudRental[];
  uniques?: (ICardProps & { id: string })[];
};

const loadData = async (
  city: City,
): Promise<{
  rentals: ICrudRental[];
  uniques: (ICardProps & { id: string })[];
}> => {
  const rentals = await getAllRentalsForCity(city);
  const uniques = await loadUniques(city);

  return {
    rentals,
    uniques,
  };
};

const UniquePositions: React.FC<UniquePositionsPageProps & PageProps> = ({
  rentals,
  uniques,
  city,
}) => {
  const [_rentals, _setRentals] = useState<ICrudRental[]>(rentals || []);
  const [_uniques, _setUniques] = useState<(ICardProps & { id: string })[]>(
    uniques || [],
  );

  useEffect(() => {
    if (!rentals || !uniques) {
      loadData(city).then((data) => {
        _setRentals(data.rentals);
        _setUniques(data.uniques);
      });
    }
  }, []);

  return (
    <RentalsProvider _rentals={rentals}>
      <UniquePositionsPage rentals={_rentals} uniques={_uniques} />
    </RentalsProvider>
  );
};

export async function getServerSideProps(
  context,
): Promise<{ props: UniquePositionsPageProps & PageProps }> {
  const city = getCity(context.req.session.city);
  const { rentals, uniques } = await loadData(city);

  return {
    props: {
      rentals,
      uniques,
      city,
      ...clearify({
        seo_title: 'Уникальные позиции ренталов',
        seo_description: 'Уникальные позиции ренталов',
        seo_keywords: null,
        site_url: process.env.SITE_URL,
      }),
    },
  };
}

export default UniquePositions;
