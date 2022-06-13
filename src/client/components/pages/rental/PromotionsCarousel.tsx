import React from 'react';
import styled from 'styled-components';
import useSWR, { SWRResponse } from 'swr';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fullPageSwiperProps } from '@frontend/utils/fullPageSwiperProps';
import Card from '@frontend/components/Card';
import logoWithCover from '@frontend/assets/logoWithCover.svg';
import CarouselFooter from '@frontend/components/CarouselFooter';
import Button from '@frontend/components/Button';
import CarouselControls from '@frontend/components/CarouselControls';
import CarouselContainer from '@frontend/components/CarouselContainer';
import { IPromotion } from '@lib/interfaces/IPromotion';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { get } from '@frontend/utils/fetcher';
import { halfPageSwiperProps } from '@frontend/utils/halfPageSwiperProps';

const StyledPromotionsCarousel = styled(CarouselContainer)`
  margin-bottom: 24px;
`;

interface PromotionsCarouselProps {
  id: string;
}

const PromotionsCarousel = ({ id }: PromotionsCarouselProps) => {
  const promotions: SWRResponse<IPromotion[]> = useSWR(
    `/crud/promotions/${id}`,
    get,
  );

  const promotionsFullInfo: IPromotion[] = promotions?.data || [];

  return (
    <StyledPromotionsCarousel>
      <Swiper {...halfPageSwiperProps}>
        {promotionsFullInfo.map((promotion) => (
          <SwiperSlide key={promotion.id}>
            <Card
              title={promotion.name}
              description={promotion.shortText}
              image={promotion.photos[0] || logoWithCover.src}
              link={`/promotion/${promotion.url}`}
              tag={{
                type: promotion.promotionType,
                text: promotion.text,
              }}
              date={promotion.date}
            />
          </SwiperSlide>
        ))}
        <CarouselFooter>
          <Button type="link" href={`/rentals/${id}/promotions`}>
            Посмотреть все
          </Button>
          <CarouselControls />
        </CarouselFooter>
      </Swiper>
    </StyledPromotionsCarousel>
  );
};

export default PromotionsCarousel;
