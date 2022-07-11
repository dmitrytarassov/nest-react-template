import React, { useEffect, useState } from 'react';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { useRouter } from 'next/router';
import { useRentals } from '@frontend/hooks/useRentals';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import ListTop from '@frontend/components/ListTop';
import PageMainColumnContainer from '@frontend/components/PageMainColumnContainer';
import { updateMapRentals } from '@frontend/utils/updateMapRentals';
import { ESelectRental } from '@frontend/dtos/ESelectRental';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import imageUrl from '@frontend/utils/imageUrl';
import NewsAndPromotions from '@frontend/components/pages/rentalPromotions/NewsAndPromotions';
import Positions from '@frontend/components/pages/unique_positions/Positions';
import { ICardProps } from '@frontend/components/Card';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

interface UniquePositionsPageProps {
  rentals: ICrudRental[];
  uniques: (ICardProps & { id: string })[];
}

const UniquePositionsPage = ({
  rentals,
  uniques,
}: UniquePositionsPageProps) => {
  const router = useRouter();
  const [searchString, setSearchString] = useState<string>('');

  const breadcrumbs: IBreadCrumb[] = [
    {
      name: 'Главная',
      link: '/',
    },
    {
      name: 'Уникальные позиции',
      link: '/unique_positions',
    },
  ];

  useEffect(() => {
    // @ts-ignore
    updateMapRentals(rentals, '', 500);

    function callBack(e) {
      // @ts-ignore
      const rental = rentals.find(({ id }) => id === e.detail);
      if (rental) {
        router.push(`/rentals/${rental.url}`);
      }
    }

    window.addEventListener(ESelectRental, callBack);

    return () => {
      window.removeEventListener(ESelectRental, callBack);
    };
  }, [rentals]);

  return (
    <PageMainColumnContainer>
      <ListTop
        breadcrumbs={breadcrumbs}
        backLink={`/`}
        title={`Уникальные позиции`}
        // search={{ value: searchString, onChange: setSearchString }}
      />
      <CarouselContainer>
        <div className="container">
          <Positions positions={uniques} />
        </div>
      </CarouselContainer>
    </PageMainColumnContainer>
  );
};

export default UniquePositionsPage;
