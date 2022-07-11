import React from 'react';
import styled, { css } from 'styled-components';
import CarouselControl from '@frontend/components/CarouselControl';
import { useSwiper } from 'swiper/react';
import { WithTheme } from '@frontend/utils/theme';
import classNames from 'classnames';

const StyledCarouselControls = styled.div`
  display: flex;

  &.hide-from-tablet {
    display: none;
    ${({ theme }: WithTheme) =>
      theme.mixins.tablet(
        css`
          display: flex;
        `,
      )}
  }

  &.hide-from-mobile {
    display: none;
    ${({ theme }: WithTheme) =>
      theme.mixins.mobile(
        css`
          display: flex;
        `,
      )}
  }

  &.hide {
    display: none;
  }
`;

interface CarouselControlsProps {
  revertColors?: boolean;
  hide?: number;
  count?: number;
  size?: 'large' | 'small';
  className?: string;
}

const CarouselControlsHalfScreen: React.FC<CarouselControlsProps> = ({
  revertColors,
  count,
  size = 'large',
  className,
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
        className,
        count < 2 && 'hide',
        count === 2 && 'hide-from-mobile',
      )}
    >
      <CarouselControl
        size={size}
        onClick={prev}
        revertColors={revertColors}
        direction="left"
      />
      <CarouselControl
        size={size}
        onClick={next}
        revertColors={revertColors}
        direction="right"
      />
    </StyledCarouselControls>
  );
};

export default CarouselControlsHalfScreen;
