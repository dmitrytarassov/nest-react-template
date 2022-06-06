import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';

const Image = styled.img`
  position: relative;
  padding: 32px 0;
  width: 100%;
  max-height: 400px;
  object-fit: contain;

  ${({ theme }: WithTheme) =>
    theme.mixins.halfScreenBreak(css`
      padding: 96px 0;
    `)};
`;

export default Image;
