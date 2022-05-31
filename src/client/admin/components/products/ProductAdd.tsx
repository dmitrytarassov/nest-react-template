import React from 'react';
import { Create } from 'react-admin';
import ProductBase from './ProductBase';

const ProductAdd = (props) => {
  return (
    <Create {...props} redirect="list">
      <ProductBase />
    </Create>
  );
};

export default ProductAdd;
