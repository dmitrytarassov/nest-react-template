import React from 'react';
import { Edit } from 'react-admin';
import PromotionsBase from './PromotionsBase';

const PromotionsEdit = (props) => {
  return (
    <Edit {...props} redirect="edit">
      <PromotionsBase />
    </Edit>
  );
};

export default PromotionsEdit;
