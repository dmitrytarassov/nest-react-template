import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Create,
  FormTab,
  ImageField,
  ImageInput,
  NumberInput,
  RadioButtonGroupInput,
  TabbedForm,
  TextInput,
  Edit,
} from 'react-admin';
import {
  validateEmail,
  validatePhone,
  validateRequired,
} from '@admin/components/utils/validate';
import Box from '@admin/components/Box';
import { makeUrl } from '@admin/components/utils/makeUrl';
import { BoundedTextField } from '@admin/components/BoundedTextField';
import MapModal from '@admin/components/MapModal';
import { PreviewImage } from '../PreviewImage';

const RentalEdit = (props) => {
  const [mapIsOpen, setMapIsOpen] = useState(false);
  const [city, setCity] = useState<string>('spb');
  const [name, setName] = useState<string>('');
  const [coordinates, setCoordinates] = useState([0, 0]);

  const applyCoordinates = (coords) => {
    setCoordinates(coords);
    setMapIsOpen(false);
  };

  return (
    <>
      <MapModal
        open={mapIsOpen}
        city={city}
        onClose={applyCoordinates}
        coordinates={coordinates}
      />
      <Edit {...props} redirect="edit">
        <TabbedForm>
          <FormTab label="Основная информация">
            <Box>
              <TextInput
                source="name"
                label="Название рентала"
                validate={validateRequired}
                resettable
                onChange={(e) => setName(e.target.value)}
              />
              <BoundedTextField
                label="ЧПУ"
                source="url"
                validate={validateRequired}
                disabled
                refValue={makeUrl(name)}
              />

              <RadioButtonGroupInput
                label="Адрес"
                source="city"
                defaultValue="spb"
                choices={[
                  { id: 'spb', name: 'Санкт-Петербург' },
                  { id: 'moscow', name: 'Москва' },
                ]}
                onChange={(e) => setCity(e.target.value)}
              />
              <TextInput
                multiline
                source="workingTime"
                validate={validateRequired}
                label="Время работы"
                rows={3}
              />
              <TextInput
                source="services"
                validate={validateRequired}
                label="Услуги, через запятую"
              />
              <NumberInput
                source="rating"
                validate={validateRequired}
                label="Рейтинг"
                min={1}
                max={10}
              />
              <ImageInput
                source="icon"
                label="Иконка"
                validate={validateRequired}
              >
                <PreviewImage source="icon" />
              </ImageInput>
            </Box>
          </FormTab>
          <FormTab label="Контакты">
            <Box>
              <TextInput
                source="email"
                validate={validateEmail}
                label="Email"
              />
              <TextInput
                source="phone"
                validate={validatePhone}
                label="Телефон в формате 79xxxxxxxxx"
              />
              <TextInput
                source="address"
                validate={validateRequired}
                label="Заголовок адреса"
              />
              <BoundedTextField
                source="coordinates"
                validate={validateRequired}
                label="Координаты"
                disabled
                refValue={coordinates.join(',')}
                onClick={(e) => {
                  setCoordinates(e.target.value.split(','));
                  setMapIsOpen(true);
                }}
              />
              <TextInput source="vk" label="vk" />
              <TextInput source="telegram" label="Telegram" />
              <TextInput source="web" label="Сайт" />
            </Box>
          </FormTab>
        </TabbedForm>
      </Edit>
    </>
  );
};

export default RentalEdit;
