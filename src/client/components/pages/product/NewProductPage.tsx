import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRentals } from '@frontend/hooks/useRentals';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import { updateMapRentals } from '@frontend/utils/updateMapRentals';
import { ESelectRental } from '@frontend/dtos/ESelectRental';
import ProductInfo, {
  ProductLike,
} from '@frontend/components/ProductInfo/ProductInfo';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { ICrudProduct } from '@lib/interfaces/ICrudProduct';
import { ICrudRentalProduct } from '@lib/interfaces/ICrudRentalProduct';
import ListTop from '@frontend/components/ListTop';
import PageMainColumnContainer from '@frontend/components/PageMainColumnContainer';
import styled from 'styled-components';

const StyledPageMainColumnContainer = styled(PageMainColumnContainer)`
  padding-top: 64px;
`;

type NewProductPageProps = {
  rental: ICrudRental;
  product: ICrudProduct;
  rentalProduct: ICrudRentalProduct;
};

const NewProductPage: React.FC<NewProductPageProps> = ({
  rental,
  product,
  rentalProduct,
}) => {
  const router = useRouter();

  const { rentals } = useRentals();
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
      link: `/rentals/${rental.url}`,
    },
    {
      name: product.name,
      link: `/rentals/${rental.url}/${rentalProduct.url}`,
    },
  ];

  useEffect(() => {
    updateMapRentals(rentals, rental.id, 500);

    function callBack(e) {
      const rental = rentals.find(({ id }) => id === e.detail);
      router.push(`/rentals/${rental.url}`);
    }

    window.addEventListener(ESelectRental, callBack);

    return () => {
      window.removeEventListener(ESelectRental, callBack);
    };
  }, [rental.id, rentals]);

  useEffect(() => {
    updateMapRentals([rental], rental.id);
  }, []);

  const _product: ProductLike = {
    photos: product.photos,
    date: rentalProduct.date.toString(),
    promotionText: rentalProduct.promotionText,
    promotion: {
      tag: rentalProduct.promotionType,
      tagText: rentalProduct.promotionText,
    },
    price: rentalProduct.price.toString(),
    discountPrice: rentalProduct.discountPrice.toString(),
    description: product.description,
    properties: product.properties,
    propertiesText: product.propertiesText,
    externalUrl: rentalProduct.externalUrl,
  };

  return (
    <StyledPageMainColumnContainer>
      <ListTop
        breadcrumbs={breadcrumbs}
        backLink={`/rentals/${rental.id}`}
        title={product.name}
        // image={imageUrl(rental.icon)}
      />
      <ProductInfo rental={rental} product={_product} />
    </StyledPageMainColumnContainer>
  );
};

export default NewProductPage;
