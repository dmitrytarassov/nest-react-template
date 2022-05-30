import React from 'react';
import {
  Create,
  FormTab,
  ImageInput,
  TabbedForm,
  TextInput,
  BooleanInput,
} from 'react-admin';
import { validateRequired } from '@admin/components/utils/validate';
import Box from '@admin/components/Box';
import { PreviewImage } from '../PreviewImage';

const ProductAdd = (props) => {
  return (
    <>
      <Create {...props} redirect="edit">
        <TabbedForm warnWhenUnsavedChanges>
          <FormTab label="Основная информация">
            <Box>
              <BooleanInput source="unique" label="Уникальная позиция" />
              <TextInput
                resettable
                source="name"
                label="Название продукта"
                validate={validateRequired}
              />
              <TextInput
                resettable
                source="shortDescription"
                label="Короткое описание (для карточки)"
                validate={validateRequired}
              />
              <TextInput
                multiline
                resettable
                source="properties"
                label="Харектеристики. Формат: Название---значение"
                rows={8}
              />
              <TextInput
                multiline
                resettable
                source="propertiesText"
                label="Харектеристики (текст)."
                rows={8}
              />
              <TextInput
                resettable
                multiline
                source="description"
                label="Описание"
                rows={8}
              />
              <ImageInput source="photos" validate={validateRequired} multiple>
                <PreviewImage source="photos" />
              </ImageInput>
            </Box>
          </FormTab>
        </TabbedForm>
      </Create>
    </>
  );
};

export default ProductAdd;
