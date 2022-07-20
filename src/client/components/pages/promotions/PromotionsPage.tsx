import React, { useEffect, useState } from 'react';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { useRouter } from 'next/router';
import { useRentals } from '@frontend/hooks/useRentals';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import ListTop from '@frontend/components/ListTop';
import PageMainColumnContainer from '@frontend/components/PageMainColumnContainer';
import { updateMapRentals } from '@frontend/utils/updateMapRentals';
import NewsAndPromotions from '@frontend/components/pages/rentalPromotions/NewsAndPromotions';
import { useMap } from '@frontend/hooks/useMap';

interface PromotionsProps {
  promotions: ICrudPromotion[];
}

const RentalPromotionsPage = ({ promotions }: PromotionsProps) => {
  const router = useRouter();
  const [searchString, setSearchString] = useState<string>('');
  const { activeRental } = useMap();
  const [init, setInit] = useState<boolean>(false);

  const { rentals } = useRentals();
  const breadcrumbs: IBreadCrumb[] = [
    {
      name: 'Главная',
      link: '/',
    },
    {
      name: 'Акции и новинки',
      link: `/rentals/promotions`,
    },
  ];

  useEffect(() => {
    setInit(true);
    return () => {
      setInit(false);
    };
  }, []);

  useEffect(() => {
    const rental = rentals.find(({ id }) => id === activeRental);
    if (init && rental) {
      console.log(`go to /rentals/${rental.url}`);
      if (rental) {
        router.push(`/rentals/${rental.url}`);
      }
    }
  }, [activeRental]);

  useEffect(() => {
    // @ts-ignore
    updateMapRentals([], '');
  }, []);

  const actions = promotions
    .filter(({ promotionType }) => promotionType === 'sale')
    .filter((e) =>
      searchString.length === 0
        ? true
        : e.name.toLowerCase().includes(searchString.toLowerCase()),
    );

  const news = promotions
    .filter(({ promotionType }) => promotionType === 'new')
    .filter((e) =>
      searchString.length === 0
        ? true
        : e.name.toLowerCase().includes(searchString.toLowerCase()),
    );

  return (
    <PageMainColumnContainer>
      <ListTop
        breadcrumbs={breadcrumbs}
        backLink={`/`}
        title={`Акции и новинки`}
        search={{ value: searchString, onChange: setSearchString }}
      />
      <NewsAndPromotions news={news} promotions={actions} />
    </PageMainColumnContainer>
  );
};

export default RentalPromotionsPage;
