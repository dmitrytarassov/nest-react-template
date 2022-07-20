import React, { useEffect, useState } from 'react';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import PageMainColumnContainer from '@frontend/components/PageMainColumnContainer';
import ListTop from '@frontend/components/ListTop';
import { useRentals } from '@frontend/hooks/useRentals';
import { useRouter } from 'next/router';
import Block from '@frontend/components/pages/rental/Block';
import PromotionsCarousel from '@frontend/components/pages/rental/PromotionsCarousel';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import imageUrl from '@frontend/utils/imageUrl';
import { phoneFormat } from '@frontend/utils/phoneFormat';
import Service from '@frontend/components/pages/rental/Service';
import { parseTelegram, parseUrl, parseVk } from '@frontend/utils/socials';
import { useMap } from '@frontend/hooks/useMap';
import styles from './RentalPage.module.scss';
import Image from '@frontend/components/Image';
import classNames from 'classnames';

interface RentalPageProps {
  rental: ICrudRental;
}

const RentalPage = ({ rental }: RentalPageProps) => {
  const router = useRouter();
  const { rentals } = useRentals();
  const { activeRental, selectRental } = useMap();
  const [init, setInit] = useState<boolean>(false);

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
    if (init) {
      const rental = rentals.find(({ id }) => id === activeRental);
      if (rental) {
        router.push(`/rentals/${rental.url}`);
      }
    }
  }, [activeRental]);

  useEffect(() => {
    setInit(true);
    selectRental(rental.id);
  }, []);

  return (
    <PageMainColumnContainer>
      <ListTop
        breadcrumbs={breadcrumbs}
        backLink="/rentals"
        title={rental.name}
        image={imageUrl(rental.icon)}
        rating={rental.rating}
      />
      <div className={styles.blocks}>
        <Block title="Адрес:" blockName="address">
          <div className={styles.fullRow}>
            <div className={styles.text}>{rental.address}</div>
          </div>
        </Block>
        <Block title="Контакты:" blockName="contacts">
          <div className={styles.fullRow}>
            <a className={styles.contactsLink} href={`tel:+${rental.phone}`}>
              <div className={styles.contactsLinkIconContainer}>
                <Image
                  className={styles.contactsIcon}
                  width={24}
                  height={24}
                  src="/public/icons/phone.svg"
                />
              </div>
              {phoneFormat(`+${rental.phone}`)}
            </a>
          </div>
          <div className={styles.fullRow}>
            <a className={styles.contactsLink} href={`mailto:${rental.email}`}>
              <div className={styles.contactsLinkIconContainer}>
                <Image
                  className={styles.contactsIcon}
                  width={24}
                  height={24}
                  src="/public/icons/email.svg"
                />
              </div>
              {rental.email}
            </a>
          </div>
        </Block>
        <Block title="Соцсети:" blockName="socials">
          <div className={classNames(styles.flexibleContainer, styles.fullRow)}>
            {rental.telegram && (
              <div className={styles.fullRow}>
                <a
                  href={rental.telegram}
                  target="_blank"
                  className={classNames(styles.contactsLink)}
                >
                  <div className={styles.contactsLinkIconContainer}>
                    <Image
                      className={styles.contactsIcon}
                      width={24}
                      height={24}
                      src="/public/icons/telegram.svg"
                    />
                  </div>
                  {parseTelegram(rental.telegram)}
                </a>
              </div>
            )}
            {rental.vk && (
              <div className={styles.row}>
                <a
                  href={rental.vk}
                  target="_blank"
                  className={classNames(styles.contactsLink, styles.socialLink)}
                >
                  <div className={styles.contactsLinkIconContainer}>
                    <Image
                      className={styles.contactsIcon}
                      width={24}
                      height={24}
                      src="/public/icons/vk.svg"
                    />
                  </div>
                  {parseVk(rental.vk)}
                </a>
              </div>
            )}
            {rental.web && (
              <div className={styles.row}>
                <a
                  href={rental.web}
                  target="_blank"
                  className={classNames(styles.contactsLink, styles.socialLink)}
                >
                  <div className={styles.contactsLinkIconContainer}>
                    <Image
                      className={styles.contactsIcon}
                      width={24}
                      height={24}
                      src="/public/icons/web.svg"
                    />
                  </div>
                  {parseUrl(rental.web)}
                </a>
              </div>
            )}
          </div>
        </Block>
        <Block title="Время работы:" blockName="workingtime">
          {rental.workingTime.split('\n').map((e) => (
            <div className={styles.wtRow} key={e}>
              {e}
            </div>
          ))}
        </Block>
        <Block title="Сервисы:" blockName="services">
          <div className={styles.servicesContainer}>
            {rental.delivery && (
              <div className={styles.servicesRow}>
                <a
                  className={styles.serviceLink}
                  href={rental.delivery}
                  target="_blank"
                >
                  <Service>Доставка</Service>
                </a>
              </div>
            )}
            {rental.selfService && (
              <div className={styles.servicesRow}>
                <a
                  className={styles.serviceLink}
                  href={rental.selfService}
                  target="_blank"
                >
                  <Service>Self Service</Service>
                </a>
              </div>
            )}
            {rental.repair && (
              <div className={styles.servicesRow}>
                <a
                  className={styles.serviceLink}
                  href={rental.repair}
                  target="_blank"
                >
                  <Service>Ремонт</Service>
                </a>
              </div>
            )}
            {rental.insurance && (
              <div className={styles.servicesRow}>
                <a
                  className={styles.serviceLink}
                  href={rental.insurance}
                  target="_blank"
                >
                  <Service>Страховка</Service>
                </a>
              </div>
            )}
          </div>
        </Block>
      </div>
      <PromotionsCarousel id={rental.id} url={rental.url} />
    </PageMainColumnContainer>
  );
};

export default RentalPage;
