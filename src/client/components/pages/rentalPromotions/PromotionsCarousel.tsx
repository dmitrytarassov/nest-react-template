import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@frontend/components/Card';
import logoWithCover from '@frontend/assets/logoWithCover.svg';
import CarouselContainer from '@frontend/components/CarouselContainer';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { halfPageSwiperProps } from '@frontend/utils/halfPageSwiperProps';
import Button from '@frontend/components/Button';
import CarouselControls from '@frontend/components/CarouselControls';
import CarouselFooter from '@frontend/components/CarouselFooter';

const StyledPromotionsCarousel = styled(CarouselContainer)`
  margin-bottom: 24px;
`;

interface PromotionsCarouselProps {
  promotions: ICrudPromotion[];
}

const PromotionsCarousel = ({ promotions }: PromotionsCarouselProps) => {
  return (
    <StyledPromotionsCarousel>
      <Swiper {...halfPageSwiperProps}>
        {/* {promotions.map((promotion) => (
          <SwiperSlide key={promotion.title}>
            <Card
              title={promotion.title}
              description={promotion.shortText}
              price={promotion.price}
              discountPrice={promotion.discountPrice}
              image={promotion.images[0] || logoWithCover.src}
              link={`/${promotion.type}/${promotion.id}`}
              tag={promotion.tag}
            />
          </SwiperSlide>
        ))} */}
        <CarouselFooter>
          <div />
          <CarouselControls />
        </CarouselFooter>
      </Swiper>
    </StyledPromotionsCarousel>
  );
};

export default PromotionsCarousel;
