import React, { useEffect, useState } from 'react';
import { IProduct } from '@lib/interfaces/IProduct';
import ProductPagePreview from '../previews/ProductPagePreview';

export default function ProductPreviewPage() {
  const [record, setRecord] = useState<IProduct>({
    id: '',
    name: '',
    photos: [],
    description: '',
    properties: '',
    propertiesText: '',
    unique: false,
  });

  const update = () => {
    // @ts-ignore
    const formData = new FormData(document.forms.product_form);
    const name = `${formData.get('name')}`;

    const description = `${formData.get('shortDescription')}`;
    const propertiesText = `${formData.get('propertiesText')}`;
    const properties = `${formData.get('properties')}`;

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

  return <ProductPagePreview record={record} />;
}
