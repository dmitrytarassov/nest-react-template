import { getCityName } from '@frontend/utils/getCityName';
import React from 'react';
import { Datagrid, FunctionField, List, TextField } from 'react-admin';

interface RentalsListProps {}

const RentalsList = ({}: RentalsListProps) => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="name" label="Название" />
        <FunctionField
          label="Город"
          source="city"
          render={(record) => getCityName(record.city)}
        />
        <TextField source="weight" label="Вес" emptyText="0" />
      </Datagrid>
    </List>
  );
};

export default RentalsList;
