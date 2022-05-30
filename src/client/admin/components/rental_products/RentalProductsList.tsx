import React from 'react';
import {
  BooleanField,
  Datagrid,
  List,
  ReferenceField,
  TextField,
} from 'react-admin';

interface RentalsListProps {}

const RentalProductsList = ({}: RentalsListProps) => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <ReferenceField label="Name" source="productId" reference="product">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField label="Rental" source="rentalId" reference="rental">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="price" />
        <TextField source="discountPrice" />
      </Datagrid>
    </List>
  );
};

export default RentalProductsList;
