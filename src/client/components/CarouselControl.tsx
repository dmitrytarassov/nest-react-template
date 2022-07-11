import React from 'react';
import styled, { css } from 'styled-components';
import { theme, WithThemeAndProps } from '@frontend/utils/theme';

const getSizeNumber = (size: 'large' | 'small'): number => {
  return {
    large: 56,
    small: 40,
  }[size];
};

const getSizePx = (size: 'large' | 'small'): string =>
  `${getSizeNumber(size)}px`;

interface CarouselControlProps {
  size: 'large' | 'small';
  direction: 'left' | 'right';
  onClick: () => void;
  revertColors: boolean;
}

interface StyledCarouselControl {
  direction: CarouselControlProps['direction'];
  revertColors: CarouselControlProps['revertColors'];
  size: 'large' | 'small';
}

const StyledCarouselControl = styled.div<StyledCarouselControl>`
  & + & {
    margin-left: 12px;
  }
  width: ${({ size }) => getSizePx(size)};
  height: ${({ size }) => getSizePx(size)};
  cursor: pointer;
  ${({ direction }) =>
    direction === 'right' &&
    css`
      transform: rotate(180deg);
    `}

  circle {
    ${({ theme, revertColors }: WithThemeAndProps<CarouselControlProps>) => css`
      fill: ${revertColors
        ? theme.colors.background.default
        : theme.colors.background.alternate};
    `}
  }

  path {
    ${({ theme, revertColors }: WithThemeAndProps<CarouselControlProps>) => css`
      fill: ${revertColors
        ? theme.colors.background.alternate
        : theme.colors.background.default};
    `}
  }

  :hover {
    filter: drop-shadow(0px 8px 16px rgba(156, 164, 169, 0.32));
  }
`;

const CarouselControl = ({
  size,
  direction,
  onClick,
  revertColors,
}: CarouselControlProps) => {
  return (
    <StyledCarouselControl
      size={size}
      direction={direction}
      onClick={onClick}
      revertColors={revertColors}
    >
      <svg
        width={getSizeNumber(size)}
        height={getSizeNumber(size)}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="28" cy="28" r="28" transform="rotate(180 28 28)" />
        <path d="M17.9393 29.0607C17.3536 28.4749 17.3536 27.5251 17.9393 26.9393L27.4853 17.3934C28.0711 16.8076 29.0208 16.8076 29.6066 17.3934C30.1924 17.9792 30.1924 18.9289 29.6066 19.5147L21.1213 28L29.6066 36.4853C30.1924 37.0711 30.1924 38.0208 29.6066 38.6066C29.0208 39.1924 28.0711 39.1924 27.4853 38.6066L17.9393 29.0607ZM37 29.5H19V26.5H37V29.5Z" />
      </svg>
    </StyledCarouselControl>
  );
};

export default CarouselControl;
