import Card, { ICardProps } from '@frontend/components/Card';
import React, { useEffect, useState } from 'react';
import { theme } from '@frontend/utils/theme';
import { ThemeProvider } from 'styled-components';
import PreviewContainer, { PreviewPageContainer } from '../PreviewContainer';
import Info from '@frontend/components/pages/product/Info';
import { IProduct } from '@lib/interfaces/IProduct';

export default function ProductPreviewPage() {
  const [record, setRecord] = useState<IProduct>({
    id: '',
    name: '',
    photos: [],
    description: '',
    properties: [],
    propertiesText: '',
    unique: false,
  });

  const update = () => {
    // @ts-ignore
    const formData = new FormData(document.forms.product_form);
    const name = `${formData.get('name')}`;

    const description = `${formData.get('shortDescription')}`;
    const propertiesText = `${formData.get('propertiesText')}`;
    const properties = `${formData.get('properties')}`.split('\n').map((e) => {
      if (e.startsWith('**')) {
        return ['**', e.replace('**', '')];
      } else {
        const [param = '', value = ''] = e.split('===');
        return [param, value];
      }
    });

    // @ts-ignore
    setRecord((record) => ({
      ...record,
      name,
      description,
      propertiesText,
      properties,
    }));
  };

  useEffect(() => {
    const id = setInterval(update, 3000);

    setTimeout(update, 100);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <PreviewContainer>
        <PreviewPageContainer>
          <Info product={record} />
        </PreviewPageContainer>
      </PreviewContainer>
    </ThemeProvider>
  );
}
