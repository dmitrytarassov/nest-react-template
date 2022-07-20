import React from 'react';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import NotFound from '@frontend/components/NotFound';
import PromotionsCarousel from '@frontend/components/pages/rentalPromotions/PromotionsCarousel';
import classNames from 'classnames';
import styles from './NewsAndPromotions.module.scss';

interface NewsAndPromotionsProps {
  news: ICrudPromotion[];
  promotions: ICrudPromotion[];
}

const NewsAndPromotions: React.FC<NewsAndPromotionsProps> = ({
  news,
  promotions,
}) => {
  return (
    <>
      {promotions.length === 0 && news.length === 0 && (
        <div className={styles.nfContainer}>
          <NotFound />
        </div>
      )}
      {promotions.length > 0 && (
        <>
          <h2 className={styles.title}>Акции</h2>
          <PromotionsCarousel promotions={promotions} />
        </>
      )}

      {news.length > 0 && (
        <>
          <h2
            className={classNames(styles.title, {
              [styles.not_alone]: promotions.length > 0,
            })}
          >
            Новинки
          </h2>
          <PromotionsCarousel promotions={news} />
        </>
      )}
    </>
  );
};

export default NewsAndPromotions;
