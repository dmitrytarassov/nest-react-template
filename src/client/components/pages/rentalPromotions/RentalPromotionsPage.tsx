import React, { useEffect } from 'react';
import { IRental } from '@lib/interfaces/IRental';
import { IPromotion } from '@lib/interfaces/IPromotion';
import { useRouter } from 'next/router';
import { useCity } from '@frontend/hooks/useCity';
import { useRentals } from '@frontend/hooks/useRentals';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import ListTop from '@frontend/components/ListTop';
import PageMainColumnContainer from '@frontend/components/PageMainColumnContainer';
import { updateMapRentals } from '@frontend/utils/updateMapRentals';
import { ESelectRental } from '@frontend/dtos/ESelectRental';
import PromotionsCarousel from '@frontend/components/pages/rentalPromotions/PromotionsCarousel';
import Title from '@frontend/components/pages/Title';

interface RentalPromotionsProps {
  rental: IRental;
  promotions: IPromotion[];
}

const RentalPromotionsPage = ({
  rental,
  promotions,
}: RentalPromotionsProps) => {
  const router = useRouter();
  const { city } = useCity();

  const { rentals } = useRentals();
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
      link: `/rentals/${rental.id}`,
    },
    {
      name: 'Новинки и акции',
      link: `/rentals/${rental.id}/promotions`,
    },
  ];

  useEffect(() => {
    const _rentals = rentals.find(({ id }) => id === rental.id)
      ? rentals
      : [...rentals, rental];
    updateMapRentals(_rentals, rental.id, 500);
  }, [rentals, rental.id]);

  useEffect(() => {
    updateMapRentals([rental], rental.id);
    function callBack(e) {
      // @ts-ignore
      router.push(`/rentals/${e.detail}/promotions`);
    }

    window.addEventListener(ESelectRental, callBack);

    return () => {
      window.removeEventListener(ESelectRental, callBack);
    };
  }, []);

  return (
    <PageMainColumnContainer>
      <ListTop
        breadcrumbs={breadcrumbs}
        backLink={`/rentals/${rental.id}`}
        title={`${rental.name}: Новинки и акции`}
        // image={rental.icon}
      />
      <Title>Акции</Title>
      {/* <PromotionsCarousel
        promotions={promotions.filter(({ type }) => type === 'promotion')}
      /> */}
      <Title>Новинки</Title>
      {/* <PromotionsCarousel
        promotions={promotions.filter(({ type }) => type === 'news')}
      /> */}
    </PageMainColumnContainer>
  );
};

export default RentalPromotionsPage;
