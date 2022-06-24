import { createContext } from 'react';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';

export interface INewsContext {
  news: ICrudPromotion[];
}

export const NewsContext = createContext<INewsContext>({
  news: [],
});
