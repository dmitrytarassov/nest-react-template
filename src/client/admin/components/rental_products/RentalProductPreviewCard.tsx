import React, { useEffect, useState } from 'react';
import { useReference } from 'react-admin';
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';
import ProductCardPreview from '../previews/ProductCardPreview';

export default function RentalProductPreviewCard() {
  const [record, setRecord] = useState<{
    rentalId?: number;
    productId?: number;
    promotionType?: string;
    promotionText?: string;
    date?: string;
    price?: number;
    discountPrice?: number;
    promotionShortDescription?: string;
  }>({});

  const rental = useReference({
    id: record?.rentalId,
    reference: 'rental',
  });

  const product = useReference({
    id: record?.productId,
    reference: 'product',
  });

  const photo = product.referenceRecord?.photos[0];

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
    image: photo ? `/public/${photo}` : '',
    title: product.referenceRecord?.name,
    description: product.referenceRecord?.shortDescription,
    price: record.price,
    discountPrice: record.discountPrice,
    promotionText: record.promotionShortDescription,
    tag,
    date: record.date,
  };

  const update = () => {
    // @ts-ignore
    const formData = new FormData(document.forms.rental_product_form);

    const rentalId = formData.get('rentalId');
    const productId = `${formData.get('productId')}`;
    const promotionType = `${formData.get('promotionType')}`;
    const promotionText = `${formData.get('promotionText')}`;
    const date = formData.get('date') || undefined;
    const price = +`${formData.get('price')}`;
    const discountPrice = +`${formData.get('discountPrice')}`;
    const promotionShortDescription = `${formData.get(
      'promotionShortDescription',
    )}`;

    // @ts-ignore
    setRecord((record) => ({
      ...record,
      rentalId: rentalId || undefined,
      productId: productId || undefined,
      promotionType: promotionType || undefined,
      promotionText: promotionText || undefined,
      date: date || undefined,
      price: price || undefined,
      discountPrice: discountPrice || undefined,
      promotionShortDescription: promotionShortDescription || undefined,
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
