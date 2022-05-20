import React, { useEffect, useState } from 'react';
import useSWR, { SWRResponse } from 'swr';
import { get } from '@frontend/utils/fetcher';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { IPromotion } from '@lib/interfaces/IPromotion';
import { PromotionsContext } from '@frontend/contexts/promotions.context';
import { FullPromotionInfo } from '@frontend/dtos/FullPromotionInfo';
import { IRental } from '@lib/interfaces/IRental';
import { IProduct } from '@lib/interfaces/IProduct';
import { useCity } from '@frontend/hooks/useCity';

export const PromotionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [init, setInit] = useState<boolean>(false);
  const [promotions, setPromotions] = useState<IPromotion[]>([]);
  const [productsIds, setProductsIds] = useState<string[]>([]);
  const [promotionsFullInfo, setPromotionsFullInfo] = useState<
    FullPromotionInfo[]
  >([]);
  const city = useCity();

  const rentalsData: SWRResponse<IControllerResponse<IRental[]>> = useSWR(
    '/api/rentals',
    get,
  );

  const productsData: SWRResponse<IControllerResponse<IProduct[]>> = useSWR(
    `/api/products?ids=${productsIds.join(',')}`,
    get,
  );

  const fetchData: SWRResponse<IControllerResponse<IPromotion[]>> = useSWR(
    '/api/promotions',
    get,
  );

  useEffect(() => {
    if (fetchData.data) {
      setPromotions(fetchData.data.data);
      setProductsIds(
        fetchData.data.data.map(({ productId }) => productId).filter(Boolean),
      );
    }
  }, [fetchData.data]);

  useEffect(() => {
    if (
      promotions.length &&
      rentalsData.data?.data.length &&
      productsData.data?.data.length
    ) {
      setPromotionsFullInfo(
        promotions.map((promotion) => {
          const product =
            promotion.productId &&
            productsData.data.data.find(({ id }) => id === promotion.productId);
          return {
            ...promotion,
            images: [...promotion.images, ...(product ? product.photos : [])],
            product,
            rental:
              promotion.rentalId &&
              rentalsData.data.data.find(({ id }) => id === promotion.rentalId),
          };
        }),
      );
    }
  }, [
    rentalsData.data?.data.length,
    productsData.data?.data.length,
    promotions,
  ]);

  useEffect(() => {
    if (init) {
      fetchData.mutate();
    }
  }, [city]);

  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <PromotionsContext.Provider value={{ promotions, promotionsFullInfo }}>
      {children}
    </PromotionsContext.Provider>
  );
};
