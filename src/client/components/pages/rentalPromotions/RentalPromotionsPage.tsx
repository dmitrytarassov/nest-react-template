import React, { useEffect, useState } from 'react';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { useRouter } from 'next/router';
import { useRentals } from '@frontend/hooks/useRentals';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import ListTop from '@frontend/components/ListTop';
import PageMainColumnContainer from '@frontend/components/PageMainColumnContainer';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import imageUrl from '@frontend/utils/imageUrl';
import NewsAndPromotions from '@frontend/components/pages/rentalPromotions/NewsAndPromotions';
import { useMap } from '@frontend/hooks/useMap';

interface RentalPromotionsProps {
  rental: ICrudRental;
  promotions: ICrudPromotion[];
}

const RentalPromotionsPage = ({
  rental,
  promotions,
}: RentalPromotionsProps) => {
  const router = useRouter();
  const [searchString, setSearchString] = useState<string>('');
  const { rentals } = useRentals();
  const { activeRental } = useMap();
  const [init, setInit] = useState<boolean>(false);

  const breadcrumbs: IBreadCrumb[] = [
    {
      name: 'Главная',
      link: '/',
    },
    {
      name: 'Ренталы',
      link: '/rentals',
    },
    {
      name: rental.name,
      link: `/rentals/${rental.url}`,
    },
    {
      name: 'Новинки и акции',
      link: `/rentals/${rental.url}/promotions`,
    },
  ];

  useEffect(() => {
    setInit(true);
    return () => {
      setInit(false);
    };
  }, []);

  useEffect(() => {
    if (activeRental && init) {
      const rental = rentals.find(({ id }) => id === activeRental);
      if (rental) {
        router.push(`/rentals/${rental.url}`);
      }
    }
  }, [activeRental]);

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
        backLink={`/rentals/${rental.url}`}
        title={`${rental.name}: Новинки и акции`}
        image={imageUrl(rental.icon)}
        search={{ value: searchString, onChange: setSearchString }}
      />
      <NewsAndPromotions news={news} promotions={actions} />
    </PageMainColumnContainer>
  );
};

export default RentalPromotionsPage;
