import React, { useEffect } from 'react';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import PageMainColumnContainer from '@frontend/components/PageMainColumnContainer';
import ListTop from '@frontend/components/ListTop';
import { useRentals } from '@frontend/hooks/useRentals';
import { useRouter } from 'next/router';
import Block from '@frontend/components/pages/rental/Block';
import BlockRow from '@frontend/components/pages/rental/BlockRow';
import BlockColumn from '@frontend/components/pages/rental/BlockColumn';
import styled from 'styled-components';
import PromotionsCarousel from '@frontend/components/pages/rental/PromotionsCarousel';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import imageUrl from '@frontend/utils/imageUrl';

import SocialsRow from '@frontend/components/pages/rental/SocialsRow';
import SocialsBlock from '@frontend/components/pages/rental/SocialsBlock';
import { phoneFormat } from '@frontend/utils/phoneFormat';
import Service from '@frontend/components/pages/rental/Service';
import { parseTelegram, parseUrl, parseVk } from '@frontend/utils/socials';
import { useMap } from '@frontend/hooks/useMap';

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

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const RentalPage = ({ rental }: RentalPageProps) => {
  const router = useRouter();
  const { rentals } = useRentals();
  const { activeRental } = useMap();

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
    const rental = rentals.find(({ id }) => id === activeRental);
    if (rental) {
      router.push(`/rentals/${rental.url}`);
    }
  }, [activeRental]);

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
                <SocialIcon src="/public/icons/phone.svg" />
                {phoneFormat(`+${rental.phone}`)}
              </a>
            </SocialsRow>
            <SocialsRow fullWidth>
              <a href={`mailto:${rental.email}`}>
                <SocialIcon src="/>public/icons/email.svg" />
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
                  <SocialIcon src="/public/icons/telegram.svg" />
                  {parseTelegram(rental.telegram)}
                </a>
              </SocialsRow>
            )}
            {rental.vk && (
              <SocialsRow>
                <a href={rental.vk} target="_blank">
                  <SocialIcon src="/>public/icons/vk.svg" />
                  {parseVk(rental.vk)}
                </a>
              </SocialsRow>
            )}
            {rental.web && (
              <SocialsRow>
                <a href={rental.web} target="_blank">
                  <SocialIcon src="/public/icons/web.svg" />
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
      <PromotionsCarousel id={rental.id} url={rental.url} />
    </PageMainColumnContainer>
  );
};

export default RentalPage;
