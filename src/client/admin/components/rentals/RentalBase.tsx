import React, { useState } from 'react';
import {
  FormTab,
  ImageInput,
  NumberInput,
  RadioButtonGroupInput,
  TabbedForm,
  TextInput,
} from 'react-admin';
import { BoundedTextField } from '../BoundedTextField';
import Box from '../Box';
import { PreviewImage } from '../previews/PreviewImage';
import { makeUrl } from '../utils/makeUrl';
import {
  validateEmail,
  validatePhone,
  validateRequired,
} from '../utils/validate';
import RentalPreviewCard from './RentalPreviewCard';

type Props = {
  setCity: (value: string) => void;
  coordinates: number[];
  setMapIsOpen: (value: boolean) => void;
};

export default function RentalBase({
  setCity,
  coordinates,
  setMapIsOpen,
}: Props) {
  const [name, setName] = useState<string>('');

  return (
    <TabbedForm warnWhenUnsavedChanges id="rental_form">
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
          <TextInput source="delivery" label="Доставка" />
          <TextInput source="selfService" label="Self-Service" />
          <TextInput source="repair" label="Ремонт" />
          <TextInput source="insurance" label="Страховка" />
          <NumberInput
            source="rating"
            validate={validateRequired}
            label="Рейтинг"
            min={1}
            max={10}
          />
          <ImageInput source="icon" label="Иконка" validate={validateRequired}>
            <PreviewImage source="icon" />
          </ImageInput>
        </Box>
      </FormTab>
      <FormTab label="Контакты">
        <Box>
          <TextInput source="email" validate={validateEmail} label="Email" />
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
            onClick={() => setMapIsOpen(true)}
          />
          <TextInput source="vk" label="vk" />
          <TextInput source="telegram" label="Telegram" />
          <TextInput source="web" label="Сайт" />
        </Box>
      </FormTab>
      <FormTab label="Preview: Card">
        <RentalPreviewCard />
      </FormTab>
    </TabbedForm>
  );
}
