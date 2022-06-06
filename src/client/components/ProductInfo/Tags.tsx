import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';
import TagBase from '@frontend/components/TagBase';

const StyledTags = styled.div`
  position: absolute;
  left: 24px;
  right: 24px;
  display: flex;
  justify-content: space-between;
  top: 24px;

  ${({ theme }: WithTheme) => css`
    ${theme.mixins.halfScreenBreak(css`
      justify-content: flex-start;

      ${TagBase} + ${TagBase} {
        margin-left: 12px;
      }
    `)}
  `};
`;

interface TagsProps {
  children: React.ReactNode;
}

const Tags = ({ children }: TagsProps) => {
  return <StyledTags>{children}</StyledTags>;
};

export default Tags;
