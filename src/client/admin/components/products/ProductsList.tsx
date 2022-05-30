import React from 'react';
import { BooleanField, Datagrid, List, TextField } from 'react-admin';

interface RentalsListProps {}

const ProductsList = ({}: RentalsListProps) => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="name" />
        <BooleanField source="unique" />
      </Datagrid>
    </List>
  );
};

export default ProductsList;
