import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';

const StyledBlock = styled.div<{ columns: number }>`
  font-family: 'Roboto Mono';
  display: flex;
  flex-direction: column;
  padding: 16px 16px 4px;
  border-radius: 12px;
  border: 1px solid;
  border-color: ${({ theme }: WithTheme) => theme.colors.borders.default};
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.background.default};
  width: ${({ columns }) => (columns === 2 ? 'calc(50% - 8px)' : '100%')};
  box-sizing: border-box;
  justify-content: space-between;

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(
      css`
        width: 100%;
      `,
    )};

  ${({ columns }) =>
    columns === 1
      ? css`
          :not(:last-child) {
            margin-top: 16px;
          }
        `
      : css`
          margin-top: 16px;
        `}
`;

const BlockTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: ${({ theme }: WithTheme) => theme.colors.text.secondary};
  margin-bottom: 12px;
`;

interface BlockProps {
  children: React.ReactNode;
  title?: string;
  columns?: number;
}

const Block = ({ children, title, columns = 1 }: BlockProps) => {
  return (
    <StyledBlock columns={columns}>
      {title && <BlockTitle>{title}</BlockTitle>}
      {children}
    </StyledBlock>
  );
};

export default Block;
