import React, { useEffect, useState } from 'react';
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
import styled from 'styled-components';
import NotFound from '@frontend/components/NotFound';
import classNames from 'classnames';
import NewsAndPromotions from '@frontend/components/pages/rentalPromotions/NewsAndPromotions';

const StyledTitle = styled(Title)`
  &.not_alone {
    margin-top: 32px;
  }
`;

const NFContainer = styled.div`
  min-height: 420px;
`;

interface PromotionsProps {
  promotions: ICrudPromotion[];
}

const RentalPromotionsPage = ({ promotions }: PromotionsProps) => {
  const router = useRouter();
  const [searchString, setSearchString] = useState<string>('');

  const { rentals } = useRentals();
  const breadcrumbs: IBreadCrumb[] = [
    {
      name: 'Главная',
      link: '/',
    },
    {
      name: 'Новинки и акции',
      link: `/rentals/promotions`,
    },
  ];

  useEffect(() => {
    // @ts-ignore
    updateMapRentals(rentals, '', 500);

    function callBack(e) {
      // @ts-ignore
      const rental = rentals.find(({ id }) => id === e.detail);
      if (rental) {
        router.push(`/rentals/${rental.url}/promotions`);
      }
    }

    window.addEventListener(ESelectRental, callBack);

    return () => {
      window.removeEventListener(ESelectRental, callBack);
    };
  }, [rentals]);

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
        title={`Новинки и акции`}
        search={{ value: searchString, onChange: setSearchString }}
      />
      <NewsAndPromotions news={news} promotions={actions} />
    </PageMainColumnContainer>
  );
};

export default RentalPromotionsPage;
