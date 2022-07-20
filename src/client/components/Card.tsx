import React from 'react';
import Link from 'next/link';
import { moneyFormat } from '@frontend/utils/moneyFormat';
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';
import CardTag from '@frontend/components/CardTag';
import CardDate from '@frontend/components/CardDate';
import { getExpirationDateText } from '@frontend/utils/getExpirationDateText';
import imageUrl from '@frontend/utils/imageUrl';
import styles from './Card.module.scss';
import Image from '@frontend/components/Image';
import classNames from 'classnames';

export interface ICardProps {
  title: string;
  description?: string;
  image: string;
  link: string;
  price?: number;
  discountPrice?: number;
  tag?: IPromotionTag;
  date?: string;
  promotionText?: string;
  rentalLogo?: string;
  size?: 'small' | 'large';
}

const Card = ({
  size = 'small',
  link,
  image,
  title,
  description,
  price,
  discountPrice,
  tag,
  date,
  promotionText,
  rentalLogo,
}: ICardProps) => {
  const dateText = getExpirationDateText(date);

  return (
    <Link href={link} passHref>
      <a className={classNames(styles.card, styles[size])}>
        {tag && <CardTag tag={tag.type} text={tag.text} size={size} />}
        {dateText && <CardDate size={size}>{dateText}</CardDate>}
        <div className={styles.container}>
          <div>
            <Image
              className={styles.image}
              src={image}
              layout="responsive"
              width="400px"
              height="200px"
            />
            <div
              className={classNames(styles.content, {
                [styles.withPrice]: !!price,
              })}
            >
              <div className={styles.titleContainer}>
                <div className={styles.popupContainer}>
                  <span className={styles.title}>{title}</span>
                  <div className={styles.popup}>{title}</div>
                </div>
                {rentalLogo && (
                  <div className={styles.logoContainer}>
                    <img src={imageUrl(rentalLogo)} className={styles.logo} />
                  </div>
                )}
              </div>
              <div className={styles.text}>{promotionText || description}</div>
            </div>
          </div>
          {price && (
            <div className={styles.footer}>
              <div className={styles.priceTitle}>Цена за сутки:</div>
              <div className={styles.prices}>
                {discountPrice && (
                  <div className={styles.oldPrice}>{moneyFormat(price)}</div>
                )}
                <div className={styles.price}>
                  {moneyFormat(discountPrice || price)}
                </div>
              </div>
            </div>
          )}
        </div>
      </a>
    </Link>
  );
};

export default Card;
