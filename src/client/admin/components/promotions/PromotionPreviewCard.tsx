import React, { useEffect, useState } from 'react';
import { useReference } from 'react-admin';
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';
import ProductCardPreview from '../previews/ProductCardPreview';

export default function PromotionPreviewCard() {
  const [record, setRecord] = useState<{
    rentalId?: number;
    name?: string;
    shortText?: string;
    text?: string;
    promotionType?: string;
    promotionText?: string;
    date?: string;
    photos?: string[];
  }>({});

  // @ts-ignore
  const tag: IPromotionTag =
    record.promotionType !== ''
      ? {
          type: record.promotionType,
          text: record.promotionText,
        }
      : undefined;

  const _record = {
    link: '#',
    image: record.photos?.[0] || '',
    title: record?.name,
    description: record?.shortText,
    tag,
    date: record.date,
  };

  const update = () => {
    // @ts-ignore
    const formData = new FormData(document.forms.promotion_form);

    const rentalId = formData.get('rentalId');
    const name = `${formData.get('name')}`;
    const shortText = `${formData.get('shortText')}`;
    const text = `${formData.get('text')}`;
    const promotionType = formData.get('promotionType') || undefined;
    const promotionText = `${formData.get('promotionText')}`;
    const date = `${formData.get('date')}`;

    // @ts-ignore
    const photos =
      [
        // @ts-ignore
        ...(document.forms.promotion_form?.querySelectorAll('.previews img') ||
          []),
      ]?.map((e) => e.src) || [];

    // @ts-ignore
    setRecord((record) => ({
      ...record,
      rentalId,
      name,
      shortText,
      text,
      promotionType,
      promotionText,
      date,
      photos,
    }));
  };

  useEffect(() => {
    const id = setInterval(update, 3000);

    setTimeout(update, 100);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <ProductCardPreview record={_record} />;
}
