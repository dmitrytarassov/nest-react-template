import { useContext } from 'react';
import { PromotionsContext } from '@frontend/contexts/promotions.context';

export function usePromotions() {
  const context = useContext(PromotionsContext);

  if (!context) {
    throw new Error(`Missing promotions context`);
  }

  return context;
}
