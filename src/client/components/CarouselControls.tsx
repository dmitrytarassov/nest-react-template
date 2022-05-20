import React from 'react';
import styled, { css } from 'styled-components';
import CarouselControl from '@frontend/components/CarouselControl';
import { useSwiper } from 'swiper/react';

const StyledCarouselControls = styled.div`
  display: flex;
`;

const CarouselControls = ({
  revertColors = false,
}: {
  revertColors?: boolean;
}) => {
  const swiper = useSwiper();

  const next = () => {
    swiper.slideNext();
  };

  const prev = () => {
    swiper.slidePrev();
  };

  return (
    <StyledCarouselControls>
      <CarouselControl
        onClick={prev}
        revertColors={revertColors}
        direction="left"
      />
      <CarouselControl
        onClick={next}
        revertColors={revertColors}
        direction="right"
      />
    </StyledCarouselControls>
  );
};

export default CarouselControls;
