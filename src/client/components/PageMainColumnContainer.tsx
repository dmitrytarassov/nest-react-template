import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';

const PageMainColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;

  width: 100%;
  box-sizing: border-box;
  //min-height: calc(100vh - 72px - 299px);

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      padding: 32px 16px 40px;
      //min-height: unset;
    `)};
`;

export default PageMainColumnContainer;
