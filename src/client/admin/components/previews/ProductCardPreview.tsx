import Card, { ICardProps } from '@frontend/components/Card';
import { theme } from '@frontend/utils/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import PreviewContainer, { PreviewCardContainer } from './PreviewContainer';

type Props = {
  record: ICardProps;
};

export default function ProductCardPreview({ record }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <PreviewContainer>
        <PreviewCardContainer>
          <Card {...record} />
        </PreviewCardContainer>
      </PreviewContainer>
    </ThemeProvider>
  );
}
