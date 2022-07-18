import React from 'react';
import Content from '@frontend/layout/Content';

import { Swiper, SwiperSlide } from 'swiper/react';
import { usePromotions } from '@frontend/hooks/usePromotions';
import Card from '@frontend/components/Card';
import Button from '@frontend/components/Button';
import CarouselControls from '@frontend/components/CarouselControls';
import { fullPageSwiperProps } from '@frontend/utils/fullPageSwiperProps';
import CarouselContainer from '@frontend/components/CarouselContainer';
import imageUrl from '@frontend/utils/imageUrl';
import styles from './PromotionsCarousel.module.scss';
import classNames from 'classnames';
import headingStyles from '../../Heading.module.scss';

const PromotionsCarousel = () => {
  const { promotions } = usePromotions();

  return (
    <>
      {promotions.length > 0 && (
        <Content className={styles.content}>
          <div className={styles.container}>
            <h3 className={classNames(styles.heading, headingStyles.useLines)}>
              <div>
                Акции и{'\u00A0'}новинки{'\u00A0'}ренталов
              </div>
            </h3>
            <CarouselContainer>
              <Swiper {...fullPageSwiperProps}>
                {promotions.map((promotion) => (
                  <SwiperSlide key={promotion.id}>
                    <Card
                      size="large"
                      title={promotion.name}
                      description={promotion.shortText}
                      image={imageUrl(promotion.photos[0])}
                      link={promotion.url}
                      tag={{
                        type: promotion.promotionType,
                        text: promotion.promotionText,
                      }}
                      date={promotion.date}
                      price={promotion.price}
                      discountPrice={promotion.discountPrice}
                      rentalLogo={promotion.rentalLogo}
                    />
                  </SwiperSlide>
                ))}
                <div className={styles.carousel}>
                  <Button type="link" href="/promotions" size="large">
                    Посмотреть все
                  </Button>
                  <CarouselControls count={promotions.length} color="black" />
                </div>
              </Swiper>
            </CarouselContainer>
          </div>
        </Content>
      )}
    </>
  );
};

export default PromotionsCarousel;
