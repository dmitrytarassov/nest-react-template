import React from 'react';
import { moneyFormat } from '@frontend/utils/moneyFormat';
import Button from '@frontend/components/Button';
import ShareButton from '@frontend/components/ShareButton';
import styles from './Price.module.scss';

interface PriceProps {
  price: number;
  discountPrice?: number;
  link?: string;
}

const Price = ({ price, discountPrice, link }: PriceProps) => {
  const isPromotion = !(price || discountPrice);
  return (
    <div className={styles.price}>
      <div className={styles.prices}>
        {isPromotion ? (
          <div className={styles.text}>
            {link ? 'Посмотреть на сайте рентала' : 'Поделиться'}
          </div>
        ) : (
          <>
            <div className={styles.text}>Стоимость за сутки:</div>
            <div className={styles.current}>
              {moneyFormat(discountPrice || price, false)}
              <span>₽</span>
            </div>
            {discountPrice > 0 && (
              <div className={styles.old}>
                {moneyFormat(price, false)} <span>₽</span>
              </div>
            )}
          </>
        )}
      </div>
      <div className={styles.buttons}>
        <ShareButton alone={!link} />
        {link && (
          <Button className={styles.button} href={link} blank type="link">
            {isPromotion ? 'Открыть' : 'Арендовать'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Price;
