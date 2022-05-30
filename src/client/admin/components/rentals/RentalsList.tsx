import { getCityName } from '@frontend/utils/getCityName';
import React from 'react';
import { Datagrid, FunctionField, List, TextField } from 'react-admin';

interface RentalsListProps {}

const RentalsList = ({}: RentalsListProps) => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="name" />
        <FunctionField
          source="city"
          render={(record) => getCityName(record.city)}
        />
      </Datagrid>
    </List>
  );
};

export default RentalsList;
