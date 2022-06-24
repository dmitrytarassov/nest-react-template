import React, { useEffect, useState } from 'react';
import { ProductsProvider } from '@frontend/providers/products.provider';
import { PromotionsProvider } from '@frontend/providers/promotions.provider';
import { RentalsProvider } from '@frontend/providers/rentals.provider';
import Header from '@frontend/components/Header';
import { CityProvider } from '@frontend/providers/city.provider';
import { getCity } from '@frontend/utils/getCity';
import { PageWithCity } from '@frontend/dtos/PageWithCity';
import { PageProps } from '@frontend/dtos/PageProps';
import { get } from '@frontend/utils/fetcher';
import { IRental } from '@lib/interfaces/IRental';
import { useRouter } from 'next/router';
import useSWR, { SWRResponse } from 'swr';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { IProduct } from '@lib/interfaces/IProduct';
import ProductPage from '@frontend/components/pages/product/ProductPage';
import { RentalProductFullInfo } from '@frontend/dtos/RentalProductFullInfo';
import { getLoadProductUrl, loadProduct } from '@frontend/utils/loadProduct';
import {
  getLoadRentalProductUrl,
  loadRentalProduct,
} from '@frontend/utils/loadRentalProduct';
import { getLoadRentalUrl, loadRental } from '@frontend/utils/loadRental';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import {
  getLoadProductPromotionsUrl,
  loadProductPromotions,
} from '@frontend/utils/loadProductPromotions';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';

interface RentalPageProps extends PageWithCity {
  productData?: RentalProductFullInfo;
}

type Props = PageProps<RentalPageProps>;

const Product = ({ city, productData }: RentalPageProps) => {
  const router = useRouter();

  const rentalProductData: SWRResponse<IControllerResponse<IRentalProduct>> =
    useSWR(getLoadRentalProductUrl(router.query.id?.toString()), get);
  const rentalProduct = rentalProductData?.data?.data;

  const rentalData: SWRResponse<IControllerResponse<IRental>> = useSWR(
    rentalProduct ? getLoadRentalUrl(rentalProduct.rentalId) : null,
    get,
  );

  const productsData: SWRResponse<IControllerResponse<IProduct[]>> = useSWR(
    rentalProduct ? getLoadProductUrl(rentalProduct.productId) : null,
    get,
  );

  const promotionsData: SWRResponse<IControllerResponse<ICrudPromotion[]>> =
    useSWR(
      rentalProduct
        ? getLoadProductPromotionsUrl(rentalProduct.productId)
        : null,
      get,
    );

  const product = productsData?.data?.data[0];
  const rental = rentalData?.data?.data;
  const promotions = promotionsData?.data?.data || [];

  const data: RentalProductFullInfo =
    productData ||
    (product &&
      rentalProduct &&
      rental &&
      promotions && {
        rental,
        product,
        rentalProduct,
        promotions,
      });

  return (
    <ProductsProvider>
      <PromotionsProvider>
        <RentalsProvider>{data && <ProductPage {...data} />}</RentalsProvider>
      </PromotionsProvider>
    </ProductsProvider>
  );
};

export async function getServerSideProps(context): Promise<Props> {
  try {
    const id = (context.req.originalUrl.split('delete_products/')[1] || '')
      .split('?')[0]
      .split('#')[0];
    if (id) {
      const rentalProduct = await loadRentalProduct(id);
      if (rentalProduct) {
        const product = await loadProduct(rentalProduct.productId);
        const rental = await loadRental(rentalProduct.rentalId);
        const promotions = await loadProductPromotions(rentalProduct.productId);

        if (product && rental) {
          return {
            props: {
              productData: {
                product,
                rental,
                rentalProduct,
                promotions,
              },
              city: getCity(context.req.session.city),
            },
          };
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
  return {
    props: { statusCode: 404, city: getCity(context.req.session.city) },
  };
}

export default Product;
