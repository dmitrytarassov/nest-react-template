import React from 'react';
import styled from 'styled-components';
import Content from '@frontend/layout/Content';

import logoWithCover from '@frontend/assets/logoWithCover.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { usePromotions } from '@frontend/hooks/usePromotions';
import Card from '@frontend/components/Card';
import Button from '@frontend/components/Button';
import CarouselControls from '@frontend/components/CarouselControls';
import { fullPageSwiperProps } from '@frontend/utils/fullPageSwiperProps';
import CarouselFooter from '@frontend/components/CarouselFooter';
import CarouselContainer from '@frontend/components/CarouselContainer';
import Heading from '@frontend/components/Heading';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 64px;
`;

const PromotionsCarousel = () => {
  const { promotionsFullInfo } = usePromotions();

  return (
    <Content>
      <Container>
        <StyledHeading level="h3" useLines>
          Акции и новинки ренталов
        </StyledHeading>
        <CarouselContainer>
          <Swiper {...fullPageSwiperProps}>
            {promotionsFullInfo.map((promotion) => (
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
            ))}
            <CarouselFooter>
              <Button type="link" href="/promotions">
                Посмотреть все
              </Button>
              <CarouselControls />
            </CarouselFooter>
          </Swiper>
        </CarouselContainer>
      </Container>
    </Content>
  );
};

export default PromotionsCarousel;
