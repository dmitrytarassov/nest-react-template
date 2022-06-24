import { createContext } from 'react';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { FullPromotionInfo } from '@frontend/dtos/FullPromotionInfo';

export interface IPromotionsContext {
  promotions: ICrudPromotion[];
}

export const PromotionsContext = createContext<IPromotionsContext>({
  promotions: [],
});
