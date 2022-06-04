import React from 'react';
import { Create } from 'react-admin';
import PromotionsBase from './PromotionsBase';

const PromotionsAdd = (props) => {
  return (
    <Create {...props} redirect="list">
      <PromotionsBase />
    </Create>
  );
};

export default PromotionsAdd;
