import React from 'react';
import styled from 'styled-components';
import Content from '@frontend/layout/Content';

import { Swiper, SwiperSlide } from 'swiper/react';
import { usePromotions } from '@frontend/hooks/usePromotions';
import Card from '@frontend/components/Card';
import Button from '@frontend/components/Button';
import CarouselControls from '@frontend/components/CarouselControls';
import { fullPageSwiperProps } from '@frontend/utils/fullPageSwiperProps';
import CarouselFooter from '@frontend/components/CarouselFooter';
import CarouselContainer from '@frontend/components/CarouselContainer';
import Heading from '@frontend/components/Heading';
import imageUrl from '@frontend/utils/imageUrl';
import { Navigation } from 'swiper';
import { breakpoints } from '@frontend/utils/theme';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 64px;
`;

const PromotionsCarousel = () => {
  const { promotions } = usePromotions();

  return (
    <>
      {promotions.length > 0 && (
        <Content>
          <Container>
            <StyledHeading level="h3" useLines>
              Акции и новинки ренталов
            </StyledHeading>
            <CarouselContainer>
              <Swiper {...fullPageSwiperProps}>
                {promotions.map((promotion) => (
                  <SwiperSlide key={promotion.id}>
                    <Card
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
                <CarouselFooter>
                  <Button type="link" href="/promotions">
                    Посмотреть все
                  </Button>
                  <CarouselControls count={promotions.length} />
                </CarouselFooter>
              </Swiper>
            </CarouselContainer>
          </Container>
        </Content>
      )}
    </>
  );
};

export default PromotionsCarousel;
