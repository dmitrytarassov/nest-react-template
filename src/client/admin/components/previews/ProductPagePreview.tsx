import Info from '@frontend/components/pages/product/Info';
import { theme } from '@frontend/utils/theme';
import { IProduct } from '@lib/interfaces/IProduct';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import PreviewContainer, { PreviewPageContainer } from './PreviewContainer';

type Props = {
  record: IProduct;
};

export default function ProductPagePreview({ record }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <PreviewContainer>
        <PreviewPageContainer>
          {record && <Info product={record} />}
        </PreviewPageContainer>
      </PreviewContainer>
    </ThemeProvider>
  );
}
