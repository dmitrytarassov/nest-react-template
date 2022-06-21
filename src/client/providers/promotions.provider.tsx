import React from 'react';
import useSWR, { SWRResponse } from 'swr';
import { get } from '@frontend/utils/fetcher';
import { IPromotion } from '@lib/interfaces/IPromotion';
import { PromotionsContext } from '@frontend/contexts/promotions.context';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { ICrudRentalProduct } from '@lib/interfaces/ICrudRentalProduct';
import { ICrudProduct } from '@lib/interfaces/ICrudProduct';
import { ICrudRental } from '@lib/interfaces/ICrudRental';

export const PromotionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const data: SWRResponse<IControllerResponse<IPromotion[]>> = useSWR(
    '/crud/promotions?filter[]=date,gte,now',
    get,
  );
  const promotionsWithoutDate: SWRResponse<IControllerResponse<IPromotion[]>> =
    useSWR(`/api/promotions?filter[]=date,`, get);

  const rentalProducts: SWRResponse<IControllerResponse<ICrudRentalProduct[]>> =
    useSWR(`/api/rental_products?filter[]=promotionType,in,new|sale`, get);

  const rentals: SWRResponse<IControllerResponse<ICrudRental[]>> = useSWR(
    rentalProducts?.data?.data?.length > 0
      ? `/api/rental?filter[]=_id,in,${rentalProducts?.data?.data
          .map(({ rentalId }) => rentalId)
          .join('|')}`
      : null,
    get,
  );

  const products: SWRResponse<IControllerResponse<ICrudProduct[]>> = useSWR(
    rentalProducts?.data?.data?.length > 0
      ? `/api/product?filter[]=_id,in,${rentalProducts?.data?.data
          .map(({ productId }) => productId)
          .join('|')}`
      : null,
    get,
  );

  const productPromotions: IPromotion[] =
    products?.data?.data?.length && rentals?.data?.data?.length
      ? products?.data?.data
          .map((product) => {
            const rentalProduct: ICrudRentalProduct =
              rentalProducts.data.data.find((p) => p.productId === product.id);

            if (rentalProduct) {
              const rental: ICrudRental = rentals.data.data.find(
                (p) => p.id === rentalProduct.rentalId,
              );
              if (rental) {
                const data: IPromotion = {
                  id: product.id,
                  photos: product.photos,
                  name: product.name,
                  url: `/rentals/${rental.url}/${rentalProduct.url}`,
                  text: '',
                  shortText:
                    rentalProduct.promotionShortDescription ||
                    product.shortDescription,
                  rentalId: rentalProduct.rentalId,
                  promotionType:
                    rentalProduct.promotionType as IPromotion['promotionType'],
                  promotionText: rentalProduct.promotionText,
                  date: '',
                };
                return data;
              }
            }
          })
          .filter(Boolean)
      : [];

  const promotions = [
    ...[
      ...(data?.data?.data || []),
      ...(promotionsWithoutDate?.data?.data || []),
    ].map((promotion) => ({
      ...promotion,
      url: `/promotion/${promotion.url}`,
    })),
    ...productPromotions,
  ];

  return (
    <PromotionsContext.Provider value={{ promotions }}>
      {children}
    </PromotionsContext.Provider>
  );
};
