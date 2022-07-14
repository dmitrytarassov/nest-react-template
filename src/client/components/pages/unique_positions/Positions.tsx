import React from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card, { ICardProps } from '@frontend/components/Card';
import { halfPageSwiperProps } from '@frontend/utils/halfPageSwiperProps';
import CarouselControlsHalfScreen from '@frontend/components/CarouselControlsHalfScreen';

const CarouselContainer = styled.div<{ useLines: boolean }>`
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;

  ${({ useLines }) =>
    useLines &&
    css`
      :after {
        z-index: -1;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        background-image: url('/public/lightning-line.svg');
        background-repeat-x: repeat;
        background-repeat-y: no-repeat;
        background-size: auto calc(100% - 80px);
      }
    `}
`;

const StyledCarouselControlsHalfScreen = styled(CarouselControlsHalfScreen)`
  margin-top: 24px;
`;

interface UniquesProps {
  positions: (ICardProps & { id: string })[];
}

const Positions = ({ positions }: UniquesProps) => {
  return (
    <CarouselContainer useLines>
      <Swiper {...halfPageSwiperProps}>
        {positions.map(({ id, ...card }) => (
          <SwiperSlide key={id}>
            <Card {...card} />
          </SwiperSlide>
        ))}
        <StyledCarouselControlsHalfScreen
          revertColors
          count={positions.length}
          size="small"
        />
      </Swiper>
    </CarouselContainer>
  );
};

export default Positions;
