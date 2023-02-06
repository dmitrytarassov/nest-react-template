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
        <ReferenceField label="Название" source="productId" reference="product">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField label="Рентал" source="rentalId" reference="rental">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="price" label="Цена" />
        <TextField source="discountPrice" label="Цена по скидке" />
        <TextField source="promotionType" label="Тип акции" />
        <TextField source="weight" label="Вес" emptyText="0" />
        <BooleanField
          source="showOnMainPage"
          label="Показывать в новостях на главной?"
        />
        <BooleanField
          source="showUniqueOnMainPage"
          label="Показывать в списке уникальных позиций на главной"
        />
      </Datagrid>
    </List>
  );
};

export default RentalProductsList;
