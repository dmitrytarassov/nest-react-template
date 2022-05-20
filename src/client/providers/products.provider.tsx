import React, { useState } from 'react';
import { ProductsContext } from '@frontend/contexts/products.context';
import { IProduct } from '@lib/interfaces/IProduct';

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productIds, setProductIds] = useState<string[]>();

  const addIds = (ids: string[]) => {
    // @ts-ignore
    setProductIds((_ids) => [...new Set([...ids, ..._ids])]);
  };

  return (
    <ProductsContext.Provider value={{ products, addIds }}>
      {children}
    </ProductsContext.Provider>
  );
};
