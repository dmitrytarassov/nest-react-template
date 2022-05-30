import React from 'react';
import { Edit } from 'react-admin';
import RentalProductBase from './RentalProductBase';

const RentalProductAdd = (props) => {
  return (
    <Edit {...props} redirect="edit">
      <RentalProductBase />
    </Edit>
  );
};

export default RentalProductAdd;
