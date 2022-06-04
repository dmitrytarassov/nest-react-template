import { ICardProps } from '@frontend/components/Card';
import React, { useEffect, useState } from 'react';
import ProductCardPreview from '../previews/ProductCardPreview';

export default function ProductPreviewCard() {
  const [record, setRecord] = useState<ICardProps>({
    title: '',
    image: '',
    description: '',
    price: 10000,
    discountPrice: 9000,
    tag: {
      type: 'new',
      text: 'Пример',
    },
    date: new Date().toString(),
    link: '',
  });

  const update = () => {
    // @ts-ignore
    const formData = new FormData(document.forms.product_form);
    const title = `${formData.get('name')}`;
    // @ts-ignore
    const photos =
      [
        // @ts-ignore
        ...(document.forms.product_form?.querySelectorAll('.previews img') ||
          []),
      ]?.map((e) => e.src) || [];

    const description = `${formData.get('shortDescription')}`;

    setRecord((record) => ({
      ...record,
      title,
      image: photos[0] || '',
      description,
    }));
  };

  useEffect(() => {
    const id = setInterval(update, 3000);

    setTimeout(update, 100);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <ProductCardPreview record={record} />;
}
