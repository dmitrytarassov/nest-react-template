import React from 'react';
import styled, { css } from 'styled-components';
import { theme, WithThemeAndProps } from '@frontend/utils/theme';

interface CarouselControlProps {
  direction: 'left' | 'right';
  onClick: () => void;
  revertColors: boolean;
}

interface StyledCarouselControl {
  direction: CarouselControlProps['direction'];
  revertColors: CarouselControlProps['revertColors'];
}

const StyledCarouselControl = styled.div<StyledCarouselControl>`
  & + & {
    margin-left: 12px;
  }
  width: 56px;
  height: 56px;
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
    circle {
      ${({ theme }: WithThemeAndProps<CarouselControlProps>) => css`
        fill: ${theme.colors.links.alternate.hover};
      `}
    }

    path {
      ${({ theme }: WithThemeAndProps<CarouselControlProps>) => css`
        fill: ${theme.colors.links.active};
      `}
    }
  }
`;

const CarouselControl = ({
  direction,
  onClick,
  revertColors,
}: CarouselControlProps) => {
  return (
    <StyledCarouselControl
      direction={direction}
      onClick={onClick}
      revertColors={revertColors}
    >
      <svg
        width="56"
        height="56"
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
