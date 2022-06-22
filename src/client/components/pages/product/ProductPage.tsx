import React, { useEffect, useState } from 'react';
import { IProduct } from '@lib/interfaces/IProduct';
import { IRental } from '@lib/interfaces/IRental';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import { updateMapRentals } from '@frontend/utils/updateMapRentals';
import { ESelectRental } from '@frontend/dtos/ESelectRental';
import { useRentals } from '@frontend/hooks/useRentals';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import ListTop from '@frontend/components/ListTop';
import PageMainColumnContainer from '@frontend/components/PageMainColumnContainer';
import { useRouter } from 'next/router';
import { IPromotion } from '@lib/interfaces/IPromotion';
import Block from '@frontend/components/ProductInfo/Block';
import Image from '@frontend/components/ProductInfo/Image';
import { getExpirationDateText } from '@frontend/utils/getExpirationDateText';
import Tag from '@frontend/components/pages/product/Tag';
import DateTag from '@frontend/components/pages/product/DateTag';
import Images from '@frontend/components/ProductInfo/Images';
import Price from '@frontend/components/ProductInfo/Price';
import Info from '@frontend/components/pages/product/Info';
import Tags from '@frontend/components/pages/product/Tags';

interface ProductPageProps {
  product: IProduct;
  rental: IRental;
  rentalProduct: IRentalProduct;
  promotions: IPromotion[];
}

const ProductPage = ({
  product,
  rental,
  rentalProduct,
  promotions,
}: ProductPageProps) => {
  return null;
  const [currentImage, setCurrentImage] = useState<string>(product.photos[0]);
  const { rentals } = useRentals();
  const router = useRouter();

  const breadcrumbs: IBreadCrumb[] = [
    {
      name: 'Главная',
      link: '/',
    },
    {
      name: 'Ренталы',
      link: '/rentals',
    },
    {
      name: rental.name,
      link: `/rentals/${rental.id}`,
    },
    {
      name: product.name,
      link: `/products/${rentalProduct.id}`,
    },
  ];

  useEffect(() => {
    const _rentals = rentals.find(({ id }) => id === rental.id)
      ? rentals
      : [...rentals, rental];
    // @ts-ignore
    updateMapRentals(_rentals, rental.id, 500);
  }, [rentals, rental.id]);

  useEffect(() => {
    // @ts-ignore
    updateMapRentals([rental], rental.id);
    function callBack(e) {
      // @ts-ignore
      router.push(`/rentals/${e.detail}`);
    }

    window.addEventListener(ESelectRental, callBack);

    return () => {
      window.removeEventListener(ESelectRental, callBack);
    };
  }, []);

  const [promotion] = promotions;

  // const dateText = getExpirationDateText(promotion?.expirationDate);

  return (
    <PageMainColumnContainer>
      <ListTop
        breadcrumbs={breadcrumbs}
        backLink={`/rentals/${rental.url}`}
        title={product.name}
        // image={rental.icon}
      />
      <Block>
        <Image src={currentImage} />
        {promotion && (
          <Tags>
            {/* {promotion.tag && (
              <Tag tag={promotion.tag} text={promotion.tag.text} />
            )} */}
            {/* {dateText && <DateTag>{dateText}</DateTag>} */}
          </Tags>
        )}
        <Images
          logo={rental.icon}
          images={product.photos}
          current={currentImage}
          onChange={setCurrentImage}
        />
      </Block>
      <Block>
        <Price
          price={rentalProduct.price}
          // discountPrice={promotion?.discountPrice}
          link={rentalProduct.url}
        />
      </Block>
      <Block>
        <Info product={product} />
      </Block>
    </PageMainColumnContainer>
  );
};

export default ProductPage;
