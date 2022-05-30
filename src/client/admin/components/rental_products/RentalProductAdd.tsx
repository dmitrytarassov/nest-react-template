import React from 'react';
import { Create } from 'react-admin';
import RentalProductBase from './RentalProductBase';

const RentalProductAdd = (props) => {
  return (
    <Create {...props} redirect="list">
      <RentalProductBase />
    </Create>
  );
};

export default RentalProductAdd;
