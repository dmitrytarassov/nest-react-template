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
import { useMap } from '@frontend/hooks/useMap';
import styles from './UniquePositions.module.scss';

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
  const { activeRental } = useMap();
  const [init, setInit] = useState<boolean>(false);

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

  return (
    <PageMainColumnContainer>
      <ListTop
        breadcrumbs={breadcrumbs}
        backLink={`/`}
        title={`Уникальные позиции`}
        revertColors
        // search={{ value: searchString, onChange: setSearchString }}
      />
      <div className={styles.banner}>
        <InfoText onlyDesktop className={styles.text}>
          В этом блоке, вы можете найти редкие, {'\n'}эксклюзивные и даже такие
          позиции, {'\n'}которых вы раньше не видели!
        </InfoText>
        <InfoText onlyMobile className={styles.text}>
          В этом блоке, вы можете найти {'\n'}редкие, эксклюзивные и даже {'\n'}
          такие позиции, которых вы {'\n'}раньше не видели!
        </InfoText>
      </div>
      <CarouselContainer>
        <div className="container">
          {uniques.length ? <Positions positions={uniques} /> : <NotFound />}
        </div>
      </CarouselContainer>
    </PageMainColumnContainer>
  );
};

export default UniquePositionsPage;
