import React from 'react';
import styled, { css } from 'styled-components';
import CarouselControl from '@frontend/components/CarouselControl';
import { useSwiper } from 'swiper/react';
import { WithTheme } from '@frontend/utils/theme';
import classNames from 'classnames';

const StyledCarouselControls = styled.div`
  display: flex;

  &.hide-on-laptop {
    display: none;
    ${({ theme }: WithTheme) =>
      theme.mixins.tablet(
        css`
          display: flex;
        `,
      )}
  }

  &.hide-on-tablet {
    display: none;
    ${({ theme }: WithTheme) =>
      theme.mixins.mobile(
        css`
          display: flex;
        `,
      )}
  }

  &.hide-on-mobile {
    display: none;
  }
`;

interface CarouselControlsProps {
  revertColors?: boolean;
  hide?: number;
  count?: number;
  maxCount?: number;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  revertColors,
  count,
  maxCount = 2,
}) => {
  const swiper = useSwiper();

  const next = () => {
    swiper.slideNext();
  };

  const prev = () => {
    swiper.slidePrev();
  };

  // const classNames = {};

  return (
    <StyledCarouselControls
      className={classNames(
        count > 0 && count <= 3 && 'hide-on-laptop',
        count > 0 && count <= 2 && 'hide-on-tablet',
        count === 1 && 'hide-on-mobile',
      )}
    >
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
