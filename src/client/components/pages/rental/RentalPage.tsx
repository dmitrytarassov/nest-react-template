import React, { useEffect } from 'react';
import { IRental } from '@lib/interfaces/IRental';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import PageMainColumnContainer from '@frontend/components/PageMainColumnContainer';
import ListTop from '@frontend/components/ListTop';
import { updateMapRentals } from '@frontend/utils/updateMapRentals';
import { useRentals } from '@frontend/hooks/useRentals';
import { ESelectRental } from '@frontend/dtos/ESelectRental';
import { useRouter } from 'next/router';
import Block from '@frontend/components/pages/rental/Block';
import BlockRow from '@frontend/components/pages/rental/BlockRow';
import BlockColumn from '@frontend/components/pages/rental/BlockColumn';
import styled from 'styled-components';
import Services from '@frontend/components/pages/rental/Services';
import Contacts from '@frontend/components/pages/rental/Contacts';
import PromotionsCarousel from '@frontend/components/pages/rental/PromotionsCarousel';
import Uniques from '@frontend/components/pages/rental/Uniques';
import Title from '@frontend/components/pages/Title';
import { WithTheme } from '@frontend/utils/theme';
import Catalog from '@frontend/components/pages/rental/Catalog';

interface RentalPageProps {
  rental: IRental;
}

const BLocks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const UniquesContainer = styled.div`
  margin: 0 -24px 0 -24px;
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.background.alternate};
  padding: 32px 24px 64px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  ${Title} {
    color: ${({ theme }: WithTheme) => theme.colors.text.alternate};
  }
`;

const PositionsContainer = styled.div`
  margin: -32px -24px 0 -24px;
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.background.primary};
  padding: 32px 24px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;

const RentalPage = ({ rental }: RentalPageProps) => {
  return null;
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
      link: `/rentals/${rental.id}`,
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
        backLink="/rentals"
        title={rental.name}
        image={rental.icon}
      />
      <BLocks>
        <Block title="Адрес:">
          <BlockRow columns={1}>
            <BlockColumn>{rental.address.name}</BlockColumn>
          </BlockRow>
        </Block>
        <Block title="Контакты:" columns={2}>
          <BlockRow columns={1}>
            <BlockColumn>
              <Contacts phone={rental.phone} email={rental.email} />
            </BlockColumn>
          </BlockRow>
        </Block>
        <Block title="Соцсети:" columns={2}>
          <BlockRow columns={1}>
            <BlockColumn>{rental.address.name}</BlockColumn>
          </BlockRow>
        </Block>
        <Block title="Время работы:" columns={2}>
          <BlockRow columns={1}>
            <BlockColumn>{rental.address.name}</BlockColumn>
          </BlockRow>
        </Block>
        <Block title="Сервисы:" columns={2}>
          <BlockRow columns={1}>
            <BlockColumn>
              <Services services={rental.services} />
            </BlockColumn>
          </BlockRow>
        </Block>
      </BLocks>
      <UniquesContainer>
        <Title>Уникальные позиции</Title>
        <Uniques id={rental.id} />
      </UniquesContainer>
      <PositionsContainer>
        <Title>Акции и новости рентала</Title>
        <PromotionsCarousel id={rental.id} />
      </PositionsContainer>
      {/*<PositionsContainer>*/}
      {/*  <Title>Каталог</Title>*/}
      {/*  <Catalog id={rental.id} />*/}
      {/*</PositionsContainer>*/}
    </PageMainColumnContainer>
  );
};

export default RentalPage;
