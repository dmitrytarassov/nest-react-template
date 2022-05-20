import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';
import classNames from 'classnames';

const StyledBanner = styled.div`
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.background.secondary};
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  border-radius: 32px;
  overflow: hidden;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 64px;

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      justify-content: flex-start;
      padding: 32px;
    `)}
`;

interface BannerBaseProps {
  children: React.ReactNode;
  className?: string;
}

const BannerBase = ({ children, className }: BannerBaseProps) => {
  return (
    <StyledBanner className={classNames(className)}>{children}</StyledBanner>
  );
};

export default BannerBase;
