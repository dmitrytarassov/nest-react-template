import { useContext } from 'react';
import { ProductsContext } from '@frontend/contexts/products.context';

export function useProducts() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(`Missing promotions context`);
  }

  return context;
}
