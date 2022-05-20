import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';

const PageMainColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      margin-top: 0 !important;
    `)};
`;

export default PageMainColumnContainer;
