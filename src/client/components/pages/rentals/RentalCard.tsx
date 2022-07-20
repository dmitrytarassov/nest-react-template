import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { phoneFormat } from '@frontend/utils/phoneFormat';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import imageUrl from '@frontend/utils/imageUrl';
import Image from '@frontend/components/Image';
import styles from './RentalCard.module.scss';
import classNames from 'classnames';

interface RentalCardProps {
  rental: ICrudRental;
  active: boolean;
}

const RentalCard = ({ rental, active }: RentalCardProps) => {
  const ref = useRef();

  useEffect(() => {
    if (active && ref?.current) {
      // @ts-ignore
      ref.current?.scrollIntoViewIfNeeded();
    }
  }, [active]);

  return (
    <Link href={`/rentals/${rental.url}`} passHref>
      <a className={classNames(styles.card, active && styles.active)} ref={ref}>
        <div className={styles.imageContainer}>
          <Image src={imageUrl(rental.icon)} width="128px" height="128px" />
        </div>
        <div className={styles.container}>
          <div className={styles.rentalName}>
            <div className={styles.imageMobileContainer}>
              <Image src={imageUrl(rental.icon)} width="48px" height="48px" />
            </div>
            <div className={styles.nameAndStar}>
              <div className={styles.name}>
                <span>{rental.name}</span>
              </div>
              <div className={styles.rating}>
                <div className={styles.text}>{rental.rating}</div>
                <div className={styles.star}>
                  <Image src="/public/star.svg" width="20" height="20" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(styles.contact, styles.address)}>
            <div className={styles.icon}>
              <Image src="/public/location.svg" width="24" height="24" alt="" />
            </div>
            <div className={styles.value}>{rental.address}</div>
          </div>
          <a
            href={`tel:${rental.phone}`}
            className={classNames(styles.contact, styles.phone)}
          >
            <div className={styles.icon}>
              <Image src="/public/phone.svg" width="24" height="24" />
            </div>
            <div className={styles.value}>
              {phoneFormat(`+${rental.phone}`)}
            </div>
          </a>
        </div>
      </a>
    </Link>
  );
};

export default RentalCard;
