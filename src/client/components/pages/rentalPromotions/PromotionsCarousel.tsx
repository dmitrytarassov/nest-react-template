import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@frontend/components/Card';
import CarouselContainer from '@frontend/components/CarouselContainer';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { halfPageSwiperProps } from '@frontend/utils/halfPageSwiperProps';
import CarouselControls from '@frontend/components/CarouselControls';
import CarouselFooter from '@frontend/components/CarouselFooter';
import imageUrl from '@frontend/utils/imageUrl';
import { WithTheme } from '@frontend/utils/theme';

const PositionsContainer = styled.div`
  margin: -32px -24px;
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.background.primary};
  padding: 32px 24px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const StyledPromotionsCarousel = styled(CarouselContainer)`
  width: 100%;
  .swiper {
    display: flex;
    flex-direction: column;
  }
`;

interface PromotionsCarouselProps {
  promotions: ICrudPromotion[];
}

const PromotionsCarousel = ({ promotions }: PromotionsCarouselProps) => {
  return (
    <PositionsContainer>
      <StyledPromotionsCarousel>
        <Swiper {...halfPageSwiperProps}>
          {promotions.map((promotion) => (
            <SwiperSlide key={promotion.url}>
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
                price={promotion.price}
                discountPrice={promotion.discountPrice}
                rentalLogo={promotion.rentalLogo}
              />
            </SwiperSlide>
          ))}
          <CarouselFooter>
            <CarouselControls
              count={promotions.length + 1}
              color="black"
              size="small"
            />
          </CarouselFooter>
        </Swiper>
      </StyledPromotionsCarousel>
    </PositionsContainer>
  );
};

export default PromotionsCarousel;
