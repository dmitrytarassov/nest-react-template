import React from 'react';
import { Edit } from 'react-admin';
import ProductBase from './ProductBase';

const ProductEdit = (props) => {
  return (
    <Edit {...props} redirect="edit">
      <ProductBase />
    </Edit>
  );
};

export default ProductEdit;
