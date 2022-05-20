import { createContext } from 'react';
import { IPromotion } from '@lib/interfaces/IPromotion';
import { FullPromotionInfo } from '@frontend/dtos/FullPromotionInfo';

export interface IPromotionsContext {
  promotions: IPromotion[];
  promotionsFullInfo: FullPromotionInfo[];
}

export const PromotionsContext = createContext<IPromotionsContext>({
  promotions: [],
  promotionsFullInfo: [],
});
