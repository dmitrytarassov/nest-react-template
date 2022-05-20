import React from 'react';
import styled, { css } from 'styled-components';
import { WithThemeAndProps } from '@frontend/utils/theme';

interface TagBaseProps {
  type: 'new' | 'sale' | 'date';
}

const TagBase = styled.div<TagBaseProps>`
  font-family: 'Neue Machina';
  padding: 0 12px;
  height: 48px;
  z-index: 2;
  display: flex;
  align-items: center;
  border-radius: 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  ${({ theme, type }: WithThemeAndProps<TagBaseProps>) => css`
    background-color: ${theme.colors.tags[type]};
    color: ${theme.colors.tags.text};

    ${theme.mixins.halfScreenBreak(css`
      height: 32px;
      font-size: 14px;
    `)}
  `};
`;

export default TagBase;
