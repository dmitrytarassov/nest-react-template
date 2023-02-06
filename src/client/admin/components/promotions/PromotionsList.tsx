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
        <TextField source="name" label="Название" />
        <TextField source="shortText" label="Описание" />
        <ReferenceField label="Рентал" source="rentalId" reference="rental">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="weight" label="Вес" emptyText="0" />
        <BooleanField source="showOnMainPage" label="Показывать на главной?" />
      </Datagrid>
    </List>
  );
};

export default PromotionsList;
