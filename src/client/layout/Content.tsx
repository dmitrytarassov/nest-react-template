import React from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { WithTheme } from '@frontend/utils/theme';

const StyledContent = styled.div`
  display: flex;
  max-width: 1212px;
  width: 100%;
  padding: 56px 0 32px;

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      padding: 32px 0 16px;
    `)}
`;

interface IContentProps {
  children: React.ReactNode;
  className?: string;
}

const Content = ({ children, className }: IContentProps) => {
  return (
    <StyledContent className={classNames(className)}>{children}</StyledContent>
  );
};

export default Content;
