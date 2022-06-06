import { getExpirationDateText } from '@frontend/utils/getExpirationDateText';
import imageUrl from '@frontend/utils/imageUrl';
import { IRental } from '@lib/interfaces/IRental';
import React, { useState } from 'react';
import Tags from '../pages/product/Tags';
import Block from './Block';
import Image from './Image';
import Images from './Images';
import Info from './Info';
import Price from './Price';
import Tag from './Tag';

export type ProductLike = {
  photos: string[];
  promotion?: {
    tag: string;
    tagText: string;
  };
  promotionText?: string;
  date?: string;
  price?: string;
  discountPrice?: string;
  externalUrl?: string;
};

type Props = {
  product: ProductLike;
  rental: IRental;
};

export default function ProductInfo({ product, rental }: Props) {
  const [currentImage, setCurrentImage] = useState<string>(product.photos[0]);

  const dateText = product.date
    ? getExpirationDateText(product.date)
    : undefined;

  return (
    <>
      <Block>
        <Image src={imageUrl(currentImage)} />
        {
          <Tags>
            {product.promotion && (
              <Tag
                // @ts-ignore
                tag={product.promotion.tag}
                text={product.promotion.tagText}
              />
            )}
            {dateText && <Tag tag="date" text={dateText} />}
          </Tags>
        }
        <Images
          logo={rental.icon}
          images={product.photos}
          current={currentImage}
          onChange={setCurrentImage}
        />
      </Block>
      {(product.price || product.discountPrice) && (
        <Block>
          <Price
            price={+product.price}
            discountPrice={+product.discountPrice}
            link={product.externalUrl}
          />
        </Block>
      )}
      <Block>
        <Info promotion={product.promotionText} />
      </Block>
    </>
  );
}
