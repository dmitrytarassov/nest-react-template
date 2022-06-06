import React from 'react';
import useSWR, { SWRResponse } from 'swr';
import { get } from '@frontend/utils/fetcher';
import { IPromotion } from '@lib/interfaces/IPromotion';
import { PromotionsContext } from '@frontend/contexts/promotions.context';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';

export const PromotionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const data: SWRResponse<IControllerResponse<IPromotion[]>> = useSWR(
    '/crud/promotions?filter[]=date,gte,now',
    get,
  );

  const promotions = data?.data?.data || [];

  return (
    <PromotionsContext.Provider value={{ promotions }}>
      {children}
    </PromotionsContext.Provider>
  );
};
