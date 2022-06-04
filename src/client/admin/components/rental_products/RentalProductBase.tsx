import React, { useEffect, useState } from 'react';
import {
  FormTab,
  TabbedForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  useRecordContext,
} from 'react-admin';
import { validateRequired } from '@admin/components/utils/validate';
import Box from '@admin/components/Box';
import { DependedTextField } from '../DependedTextField';
import RentalProductPreviewCard from './RentalProductPreviewCard';
import RentalProductPreviewPage from './RentalProductPreviewPage';

const RentalProductBase = () => {
  const record = useRecordContext();
  console.log(record);

  const [promotionType, setPromotionType] = useState(record?.promotionType);

  useEffect(() => {
    if (promotionType === '') {
      record.promotionText = '';
      record.promotionDescription = '';
      record.promotionShortDescription = '';
    }
  }, [promotionType]);

  return (
    <TabbedForm id="rental_product_form">
      <FormTab label="Привязать продукт к ренталу">
        <Box>
          <ReferenceInput
            label="Продукт"
            reference="product"
            source="productId"
            validate={validateRequired}
          >
            <SelectInput optionText="name" label="Продукт" />
          </ReferenceInput>
          <ReferenceInput
            label="Рентал"
            reference="rental"
            source="rentalId"
            validate={validateRequired}
          >
            <SelectInput optionText="name" label="Рентал" />
          </ReferenceInput>
          <TextInput
            resettable
            source="url"
            label="ЧПУ"
            validate={validateRequired}
          />
          <NumberInput
            source="price"
            label="Цена"
            validate={validateRequired}
          />
          <NumberInput source="discountPrice" label="Цена по скидке" />
          <SelectInput
            label="Акция"
            source="promotionType"
            choices={[
              { id: 'new', name: 'Новинка' },
              { id: 'sale', name: 'Скидка' },
            ]}
            onChange={(e) => setPromotionType(e.target.value)}
          />
          <DependedTextField
            label="Дата окончания акции"
            source="date"
            refValue={promotionType}
            type="date"
          />
          <DependedTextField
            label="Текст для лейбла (на карточке)"
            source="promotionText"
            refValue={promotionType}
          />
          <DependedTextField
            label="Короткое описание (для карточки)"
            source="promotionShortDescription"
            refValue={promotionType}
          />
          <DependedTextField
            label="Описание акции"
            source="promotionDescription"
            refValue={promotionType}
            multiline
            rows={8}
          />
        </Box>
      </FormTab>
      <FormTab label="Preview: Card">
        <RentalProductPreviewCard />
      </FormTab>
      <FormTab label="Preview: Page">
        <RentalProductPreviewPage />
      </FormTab>
    </TabbedForm>
  );
};

export default RentalProductBase;
