import { createContext } from 'react';
import { IPromotion } from '@lib/interfaces/IPromotion';

export interface INewsContext {
  news: IPromotion[];
}

export const NewsContext = createContext<INewsContext>({
  news: [],
});
