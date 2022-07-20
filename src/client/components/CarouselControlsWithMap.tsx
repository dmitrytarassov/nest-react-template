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
  size: 'large' | 'small' | 'medium';
  color?: 'lite' | 'black';
}

const CarouselControlsWithMap: React.FC<CarouselControlsProps> = ({
  revertColors,
  count,
  size = 'large',
  color,
}) => {
  const swiper = useSwiper();

  const next = () => {
    swiper.slideNext();
  };

  const prev = () => {
    swiper.slidePrev();
  };

  return (
    <StyledCarouselControls
      className={classNames(
        count > 0 && count <= 2 && 'hide-on-laptop',
        count > 0 && count === 1 && 'hide-on-tablet',
      )}
    >
      <CarouselControl
        size={size}
        onClick={prev}
        revertColors={revertColors}
        direction="left"
        color={color}
      />
      <CarouselControl
        size={size}
        onClick={next}
        revertColors={revertColors}
        direction="right"
        color={color}
      />
    </StyledCarouselControls>
  );
};

export default CarouselControlsWithMap;
