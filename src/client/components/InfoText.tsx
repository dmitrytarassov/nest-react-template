import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';
import classNames from 'classnames';

const StyledInfoText = styled.p`
  font-family: 'Roboto Mono';
  white-space: pre-line;
  font-size: 24px;
  font-weight: 400;
  line-height: 130%;

  color: ${({ theme }: WithTheme) => theme.colors.text.secondary};

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      font-size: 20px;
    `)}

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      font-size: 16px;
    `)}
`;

interface IInfoTextProps {
  children: React.ReactNode;
  className?: string;
}

const InfoText = ({ children, className }: IInfoTextProps) => {
  return (
    <StyledInfoText className={classNames(className)}>
      {children}
    </StyledInfoText>
  );
};

export default InfoText;
