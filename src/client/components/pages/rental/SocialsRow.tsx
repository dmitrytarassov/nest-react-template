import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';
import { lintStyles } from '@frontend/utils/styles';

const SocialsRow = styled.div<{ fullWidth?: boolean; halfWidth?: boolean }>`
  display: flex;
  color: ${({ theme }: WithTheme) => theme.colors.text.additional};
  font-weight: 400;
  line-height: 140%;
  align-items: center;
  margin-bottom: 12px;
  font-size: 12px;

  :not(:last-child) {
    margin-right: 24px;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ halfWidth }) =>
    halfWidth &&
    css`
      width: 50%;
      margin-right: 0 !important;
    `}

  a {
    display: flex;
    ${lintStyles};
    align-items: center;
  }
`;

export default SocialsRow;
