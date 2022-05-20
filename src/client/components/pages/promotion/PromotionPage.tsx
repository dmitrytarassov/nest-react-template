import React, { useEffect } from 'react';
import styled from 'styled-components';
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
import Heading from '@frontend/components/Heading';
import PromotionsCarousel from '@frontend/components/pages/rentalPromotions/PromotionsCarousel';

const StyledRentalPromotions = styled.div``;

const StyledHeading = styled(Heading)`
  margin-bottom: 36px;
`;

interface PromotionPageProps {
  rental: IRental;
  promotion: IPromotion;
}

const PromotionPage = ({ rental, promotion }: PromotionPageProps) => {
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
      link: `/promotions/${promotion.id}`,
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
        backLink={`/rentals/${rental.id}/promotions`}
        title={promotion.title}
        // image={rental.icon}
      />
      <StyledHeading level="h3">Акции</StyledHeading>
      {/*<PromotionsCarousel*/}
      {/*  promotions={promotions.filter(({ type }) => type === 'promotion')}*/}
      {/*/>*/}
      {/*<StyledHeading level="h3">Новинки</StyledHeading>*/}
      {/*<PromotionsCarousel*/}
      {/*  promotions={promotions.filter(({ type }) => type === 'news')}*/}
      {/*/>*/}
    </PageMainColumnContainer>
  );
};

export default PromotionPage;
