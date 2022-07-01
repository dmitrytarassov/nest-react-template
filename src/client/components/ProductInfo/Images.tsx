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

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      flex-direction: row-reverse;
    `)};
`;

const Logo = styled.div`
  height: 56px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: ${({ theme }: WithTheme) =>
    theme.colors.buttons.alternate.default.background};

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      height: 48px;
      width: 48px;
      margin-left: 24px;

      img {
        width: 30px;
        height: 30px;
      }
    `)};
`;

const ImagesLine = styled.div`
  display: block;
  overflow-x: auto;
  margin-left: 24px;
  width: calc(100% - 80px);

  ${Logo} {
    display: flex;
    margin-left: 12px;
  }

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      width: calc(100% - 68px);
      margin-left: 0;
    `)};
`;

const ImagesLineScroll = styled.div`
  display: flex;
  float: right;

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      float: left;
    `)};
`;

interface ImageProps {
  active: boolean;
  logo?: boolean;
}

const Image = styled.img<ImageProps>`
  height: 48px;
  width: 48px;
  object-fit: contain;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${({ active, theme }: WithThemeAndProps<ImageProps>) =>
    active ? theme.colors.borders.active : theme.colors.borders.default};
  cursor: pointer;
  box-sizing: border-box;

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

  :not(:first-child) {
    margin-left: 12px;
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
      <Logo>
        <img src={logo} />
      </Logo>
      <ImagesLine>
        <ImagesLineScroll>
          {images.map((image) => (
            <Image
              src={imageUrl(image)}
              key={image}
              active={current === image}
              onClick={() => onChange(image)}
            />
          ))}
        </ImagesLineScroll>
      </ImagesLine>
    </StyledImages>
  );
};

export default Images;
