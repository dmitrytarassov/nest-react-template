import React from 'react';
import {
  BooleanField,
  Datagrid,
  List,
  ReferenceField,
  TextField,
} from 'react-admin';

interface PromotionsListProps {}

const PromotionsList = ({}: PromotionsListProps) => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="name" />
        <TextField source="shortText" />
        <ReferenceField label="Rental" source="rentalId" reference="rental">
          <TextField source="name" />
        </ReferenceField>
        <BooleanField source="showOnMainPage" label="Показывать на главной?" />
      </Datagrid>
    </List>
  );
};

export default PromotionsList;
