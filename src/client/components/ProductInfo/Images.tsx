import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme, WithThemeAndProps } from '@frontend/utils/theme';
import imageUrl from '@frontend/utils/imageUrl';

const StyledImages = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
  z-index: 2;
  width: calc(100% - 48px);
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 56px;
  display: block;

  ${({ theme }: WithTheme) =>
    theme.mixins.laptop(css`
      display: none;
    `)};
`;

const ImagesLine = styled.div`
  display: flex;
  overflow-x: auto;
  margin-left: 24px;
  flex-direction: row;

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      margin-left: 0;
    `)};
`;

interface ImageProps {
  active: boolean;
  logo?: boolean;
}

const Image = styled.img<ImageProps>`
  height: 56px;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${({ active, theme }: WithThemeAndProps<ImageProps>) =>
    active ? theme.colors.borders.active : theme.colors.borders.default};
  cursor: pointer;

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      height: 48px;
    `)};

  ${({ active, theme }: WithThemeAndProps<ImageProps>) =>
    active
      ? css`
          border-color: ${theme.colors.thumbs.active};
        `
      : css`
          border-color: ${theme.colors.thumbs.default};
          :hover {
            border-color: ${theme.colors.thumbs.hover};
          }
        `}

  ${({ theme, logo }: WithThemeAndProps<ImageProps>) =>
    logo &&
    css`
      display: none;
      
      ${theme.mixins.laptop(css`
        display: block;
      `)}}
    `}

  :not(:last-child) {
    margin-right: 12px;
  }
`;

interface ImagesProps {
  logo: string;
  images: string[];
  current: string;
  onChange: (value: string) => void;
}

const Images = ({ logo, images, current, onChange }: ImagesProps) => {
  return (
    <StyledImages>
      <Logo src={logo} />
      <ImagesLine>
        <Image src={logo} active={false} logo />
        {images.map((image) => (
          <Image
            src={imageUrl(image)}
            key={image}
            active={current === image}
            onClick={() => onChange(image)}
          />
        ))}
      </ImagesLine>
    </StyledImages>
  );
};

export default Images;
