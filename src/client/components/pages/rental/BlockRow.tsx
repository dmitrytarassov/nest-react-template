import React from 'react';
import styled, { css } from 'styled-components';
import BlockColumn from '@frontend/components/pages/rental/BlockColumn';

const BlockRow = styled.div<{ columns: number }>`
  display: flex;
  flex-wrap: wrap;

  ${BlockColumn} {
    ${({ columns }) =>
      columns === 2
        ? css`
            width: 50%;
            :nth-child(3),
            :nth-child(4) {
              margin-top: 16px;
            }
          `
        : css`
            width: 100%;
          `}
  }
`;

export default BlockRow;
