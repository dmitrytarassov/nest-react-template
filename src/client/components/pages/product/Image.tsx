import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';

const StyledImage = styled.img`
  max-height: 320px;
  position: relative;
  padding: 32px 0;

  ${({ theme }: WithTheme) =>
    theme.mixins.halfScreenBreak(css`
      padding: 96px 0;
    `)};
`;

export default StyledImage;
