import { createContext } from 'react';
import { IPromotion } from '@lib/interfaces/IPromotion';
import { FullPromotionInfo } from '@frontend/dtos/FullPromotionInfo';

export interface IPromotionsContext {
  promotions: IPromotion[];
}

export const PromotionsContext = createContext<IPromotionsContext>({
  promotions: [],
});
