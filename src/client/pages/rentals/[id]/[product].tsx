import React, { useEffect, useState } from 'react';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { getCity } from '@frontend/utils/getCity';
import {
  loadProductById,
  loadRental,
  loadRentalProduct,
} from '@frontend/utils/loaders';
import { ICrudProduct } from '@lib/interfaces/ICrudProduct';
import { ICrudRentalProduct } from '@lib/interfaces/ICrudRentalProduct';
import { PageProps } from '@frontend/pages/_app';
import { useRouter } from 'next/router';
import NewProductPage from '@frontend/components/pages/product/NewProductPage';
import clearify from '@frontend/utils/clearify';

type RentalProductPageProps = {
  rental?: ICrudRental;
  product?: ICrudProduct;
  rentalProduct?: ICrudRentalProduct;
};

const loadData = async (
  rentalProductUrl,
  rentalUrl,
): Promise<RentalProductPageProps> => {
  const rentalProduct = await loadRentalProduct(rentalProductUrl);
  if (rentalProduct) {
    const rental = await loadRental(rentalUrl);
    if (rental) {
      const product = await loadProductById(rentalProduct.productId);
      if (product) {
        return {
          rental,
          product,
          rentalProduct,
        };
      }
    }
  }
};

const RentalProductPage: React.FC<RentalProductPageProps & PageProps> = ({
  rental,
  rentalProduct,
  product,
}) => {
  const router = useRouter();
  const [data, setData] = useState<RentalProductPageProps>({
    rental,
    rentalProduct,
    product,
  });

  useEffect(() => {
    if (!product) {
      loadData(router.query.id, router.query.product).then(setData);
    }
  }, []);

  const _rental = rental || data.rental;
  const _rentalProduct = rentalProduct || data.rentalProduct;
  const _product = product || data.product;

  return (
    <NewProductPage
      rental={_rental}
      product={_product}
      rentalProduct={_rentalProduct}
    />
  );
};

export async function getServerSideProps(
  context,
): Promise<{ props: RentalProductPageProps & PageProps }> {
  try {
    const [rentalProductUrl, rentalUrl] = context.req.originalUrl
      .split('/')
      .reverse()
      .map((e) => e.split('.')[0]);

    const data = await loadData(rentalProductUrl, rentalUrl);
    if (data) {
      return {
        props: {
          ...clearify(data),
          city: getCity(context.req.session.city),
          ...clearify({
            seo_title: data.rentalProduct.seo_title,
            seo_description: data.rentalProduct.seo_description,
            seo_keywords: data.rentalProduct.seo_keywords,
            site_url: process.env.SITE_URL,
          }),
        },
      };
    }
  } catch (e) {
    console.error(e);
  }
  return {
    props: { statusCode: 404, city: getCity(context.req.session.city) },
  };
}

export default RentalProductPage;
