import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@frontend/components/Card';
import Button from '@frontend/components/Button';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { halfPageSwiperProps } from '@frontend/utils/halfPageSwiperProps';
import imageUrl from '@frontend/utils/imageUrl';
import CarouselControlsWithMap from '@frontend/components/CarouselControlsWithMap';
import { loadPromotionsByRentalId } from '@frontend/utils/loaders';
import styles from './PromotionsCarousel.module.scss';
import classNames from 'classnames';

interface PromotionsCarouselProps {
  id: string;
  url: string;
}

const PromotionsCarousel = ({ id, url }: PromotionsCarouselProps) => {
  const [allPromotions, setAllPromotions] = useState<ICrudPromotion[]>([]);
  useEffect(() => {
    loadPromotionsByRentalId(id).then((data) => {
      setAllPromotions(data);
    });
  }, [id]);

  return (
    <>
      {allPromotions.length > 0 && (
        <div className={styles.container}>
          <div className={styles.title}>
            Акции и новости рентала
            <Button
              className={styles.button}
              type="link"
              href={`/rentals/${url}/promotions`}
            >
              Посмотреть все
            </Button>
          </div>
          <div className={styles.carousel}>
            <Swiper {...halfPageSwiperProps}>
              {allPromotions.map((promotion) => (
                <SwiperSlide key={promotion.id}>
                  <Card
                    title={promotion.name}
                    description={promotion.shortText}
                    image={
                      promotion.photos[0]
                        ? imageUrl(promotion.photos[0])
                        : '/public/logoWithCover.svg'
                    }
                    link={promotion.url}
                    tag={{
                      type: promotion.promotionType,
                      text: promotion.promotionText,
                    }}
                    date={promotion.date}
                    rentalLogo={promotion.rentalLogo}
                    size="small"
                    price={promotion.price}
                    discountPrice={promotion.discountPrice}
                  />
                </SwiperSlide>
              ))}

              {allPromotions.length > 2 && (
                <div
                  className={classNames(styles.footer, styles.footerDesktop)}
                >
                  <CarouselControlsWithMap
                    count={allPromotions.length}
                    size="small"
                    color="black"
                  />
                </div>
              )}

              <div className={classNames(styles.footer, styles.footerMobile)}>
                <Button type="link" href={`/rentals/${id}/promotions`}>
                  Посмотреть все
                </Button>
                <CarouselControlsWithMap
                  count={allPromotions.length}
                  size="medium"
                  color="black"
                />
              </div>
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default PromotionsCarousel;
