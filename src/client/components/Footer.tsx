import React from 'react';
import Link from 'next/link';
import Vk from '@frontend/components/logos/Vk';
import Telegram from '@frontend/components/logos/Telegram';
import classNames from 'classnames';
import styles from './Footer.module.scss';
import Content from '@frontend/layout/Content';
import Image from 'next/image';

interface FooterProps {
  halfScreen?: boolean;
}

const Footer = ({ halfScreen }: FooterProps) => {
  return (
    <div className={styles.container}>
      <Content className={styles.content}>
        <div
          className={classNames(styles.block, {
            [styles.halfScreen]: halfScreen,
          })}
        >
          <div className={styles.column}>
            <Link href="/" passHref>
              <a className={styles.logoLink}>
                <Image
                  src="/public/logo.svg"
                  className={styles.logo}
                  layout="fill"
                />
              </a>
            </Link>
          </div>
          <div className={styles.column}>
            <Link href={'/rentals'}>Ренталы на карте</Link>
            <Link href={'/insurance'}>Страхование оборудования</Link>
            <Link href="/unique_positions">Уникальные позиции</Link>
          </div>
          <div className={styles.column}>
            <a href="mailto:kinoscope@inbox.ru">kinoscope@inbox.ru</a>
            <a href="tel:+79999222535">8 (999) 922-25-35</a>
            <div className={styles.socials}>
              <a href="https://vk.com">
                <Vk />
              </a>
              <a href="https://t.me">
                <Telegram />
              </a>
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Footer;
