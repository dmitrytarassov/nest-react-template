import React, { useEffect } from 'react';
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
import styled, { css } from 'styled-components';
import PromotionsCarousel from '@frontend/components/pages/rental/PromotionsCarousel';
import Title from '@frontend/components/pages/Title';
import { WithTheme } from '@frontend/utils/theme';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import imageUrl from '@frontend/utils/imageUrl';

import telegram from './assets/telegram.svg';
import vk from './assets/vk.svg';
import web from './assets/web.svg';
import phone from './assets/phone.svg';
import email from './assets/email.svg';

import SocialsRow from '@frontend/components/pages/rental/SocialsRow';
import SocialsBlock from '@frontend/components/pages/rental/SocialsBlock';
import { phoneFormat } from '@frontend/utils/phoneFormat';
import Service from '@frontend/components/pages/rental/Service';
import Button from '@frontend/components/Button';
import { parseTelegram, parseUrl, parseVk } from '@frontend/utils/socials';

interface RentalPageProps {
  rental: ICrudRental;
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

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const RentalPage = ({ rental }: RentalPageProps) => {
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
  }, [rentals, rental.id]);

  useEffect(() => {
    // @ts-ignore
    updateMapRentals([rental], rental.id);
  }, []);

  return (
    <PageMainColumnContainer>
      <ListTop
        breadcrumbs={breadcrumbs}
        backLink="/rentals"
        title={rental.name}
        image={imageUrl(rental.icon)}
      />
      <BLocks>
        <Block title="Адрес:">
          <BlockRow columns={1}>
            <BlockColumn>{rental.address}</BlockColumn>
          </BlockRow>
        </Block>
        <Block title="Контакты:" columns={2}>
          <SocialsBlock>
            <SocialsRow fullWidth>
              <a href={`tel:+${rental.phone}`}>
                <SocialIcon src={phone.src} />
                {phoneFormat(`+${rental.phone}`)}
              </a>
            </SocialsRow>
            <SocialsRow fullWidth>
              <a href={`mailto:${rental.email}`}>
                <SocialIcon src={email.src} />
                {rental.email}
              </a>
            </SocialsRow>
          </SocialsBlock>
        </Block>
        <Block title="Соцсети:" columns={2}>
          <SocialsBlock>
            {rental.telegram && (
              <SocialsRow>
                <a href={rental.telegram} target="_blank">
                  <SocialIcon src={telegram.src} />
                  {parseTelegram(rental.telegram)}
                </a>
              </SocialsRow>
            )}
            {rental.vk && (
              <SocialsRow>
                <a href={rental.vk} target="_blank">
                  <SocialIcon src={vk.src} />
                  {parseVk(rental.vk)}
                </a>
              </SocialsRow>
            )}
            {rental.web && (
              <SocialsRow>
                <a href={rental.web} target="_blank">
                  <SocialIcon src={web.src} />
                  {parseUrl(rental.web)}
                </a>
              </SocialsRow>
            )}
          </SocialsBlock>
        </Block>
        <Block title="Время работы:" columns={2}>
          <SocialsBlock>
            {rental.workingTime.split('\n').map((e) => (
              <SocialsRow key={e}>{e}</SocialsRow>
            ))}
          </SocialsBlock>
        </Block>
        <Block title="Сервисы:" columns={2}>
          <SocialsBlock>
            {rental.delivery && (
              <SocialsRow halfWidth>
                <a href={rental.delivery} target="_blank">
                  <Service>Доставка</Service>
                </a>
              </SocialsRow>
            )}
            {rental.selfService && (
              <SocialsRow halfWidth>
                <a href={rental.selfService} target="_blank">
                  <Service>Self Service</Service>
                </a>
              </SocialsRow>
            )}
            {rental.repair && (
              <SocialsRow halfWidth>
                <a href={rental.repair} target="_blank">
                  <Service>Ремонт</Service>
                </a>
              </SocialsRow>
            )}
            {rental.insurance && (
              <SocialsRow halfWidth>
                <a href={rental.insurance} target="_blank">
                  <Service>Страховка</Service>
                </a>
              </SocialsRow>
            )}
          </SocialsBlock>
        </Block>
      </BLocks>
      {/*<UniquesContainer>*/}
      {/*  <Title>Уникальные позиции</Title>*/}
      {/*  <Uniques id={rental.id} />*/}
      {/*</UniquesContainer>*/}
      <PromotionsCarousel id={rental.id} url={rental.url} />
    </PageMainColumnContainer>
  );
};

export default RentalPage;
