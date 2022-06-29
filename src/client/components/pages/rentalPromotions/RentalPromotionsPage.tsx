import React, { useEffect } from 'react';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { useRouter } from 'next/router';
import { useRentals } from '@frontend/hooks/useRentals';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import ListTop from '@frontend/components/ListTop';
import PageMainColumnContainer from '@frontend/components/PageMainColumnContainer';
import { updateMapRentals } from '@frontend/utils/updateMapRentals';
import { ESelectRental } from '@frontend/dtos/ESelectRental';
import PromotionsCarousel from '@frontend/components/pages/rentalPromotions/PromotionsCarousel';
import Title from '@frontend/components/pages/Title';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import imageUrl from '@frontend/utils/imageUrl';

interface RentalPromotionsProps {
  rental: ICrudRental;
  promotions: ICrudPromotion[];
}

const RentalPromotionsPage = ({
  rental,
  promotions,
}: RentalPromotionsProps) => {
  const router = useRouter();

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
      link: `/rentals/${rental.url}`,
    },
    {
      name: 'Новинки и акции',
      link: `/rentals/${rental.url}/promotions`,
    },
  ];

  useEffect(() => {
    const _rentals = rentals.find(({ id }) => id === rental.id)
      ? rentals
      : [...rentals, rental];
    // @ts-ignore
    updateMapRentals(_rentals, rental.id, 500);
  }, [rentals, rental.id]);

  useEffect(() => {
    // @ts-ignore
    updateMapRentals([rental], rental.id);
    function callBack(e) {
      // @ts-ignore
      router.push(`/rentals/${e.detail}`);
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
        backLink={`/rentals/${rental.url}`}
        title={`${rental.name}: Новинки и акции`}
        image={imageUrl(rental.icon)}
      />
      <Title>Акции</Title>
      <PromotionsCarousel
        promotions={promotions.filter(
          ({ promotionType }) => promotionType === 'sale',
        )}
      />
      <Title>Новинки</Title>
      <PromotionsCarousel
        promotions={promotions.filter(
          ({ promotionType }) => promotionType === 'new',
        )}
      />
    </PageMainColumnContainer>
  );
};

export default RentalPromotionsPage;
