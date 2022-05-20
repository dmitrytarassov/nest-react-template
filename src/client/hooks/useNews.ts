import { INewsContext, NewsContext } from '@frontend/contexts/news.context';
import { getContext } from '@frontend/hooks/getContext';
import { createContext, useContext } from 'react';

export function useNews() {
  const context = useContext(NewsContext);

  if (!context) {
    throw new Error(`Missing news context`);
  }

  return context;

  // return getContext<INewsContext>(NewsContext);
}
