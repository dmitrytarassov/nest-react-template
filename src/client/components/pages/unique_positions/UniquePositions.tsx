import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import ListTop from '@frontend/components/ListTop';
import PageMainColumnContainer from '@frontend/components/PageMainColumnContainer';
import { updateMapRentals } from '@frontend/utils/updateMapRentals';
import { ESelectRental } from '@frontend/dtos/ESelectRental';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import Positions from '@frontend/components/pages/unique_positions/Positions';
import { ICardProps } from '@frontend/components/Card';
import styled, { css } from 'styled-components';
import NotFound from '@frontend/components/NotFound';
import BannerBase from '@frontend/components/pages/home/BannerBase';
import { WithTheme } from '@frontend/utils/theme';
import InfoText from '@frontend/components/InfoText';

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

const StyledBanner = styled(BannerBase)`
  background-color: rgba(255, 255, 255, 0.15);
  background-image: url('/public/uniques.png');
  padding: 24px;
  align-items: flex-start;
  margin-bottom: 32px;
  border-radius: 24px;

  ${({ theme }: WithTheme) => theme.mixins.tablet(css``)}

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      background-position: bottom right;
      background-size: cover;
      background-image: url('/public/uniques-mobile.png');
      padding: 32px;
      height: 268px;
    `)}
`;

const StyledInfoText = styled(InfoText)`
  color: #fff;
  max-width: 448px;
  margin-bottom: 0;
  min-height: 145px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  align-items: center;
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
      <StyledBanner>
        <StyledInfoText>
          В этом блоке, вы можете найти редкие, эксклюзивные и даже такие
          позиции, которых вы раньше не видели!
        </StyledInfoText>
      </StyledBanner>
      <CarouselContainer>
        <div className="container">
          {uniques.length ? <Positions positions={uniques} /> : <NotFound />}
        </div>
      </CarouselContainer>
    </PageMainColumnContainer>
  );
};

export default UniquePositionsPage;
