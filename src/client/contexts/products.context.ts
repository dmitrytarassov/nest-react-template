import { IProduct } from '@lib/interfaces/IProduct';
import { createContext } from 'react';

export interface IProductsContext {
  products: IProduct[];
  addIds: (ids: string[]) => void;
}

export const ProductsContext = createContext<IProductsContext>({
  products: [],
  addIds: () => {
    // do nothing
  },
});
