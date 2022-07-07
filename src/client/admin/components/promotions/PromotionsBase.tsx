import React, { useState } from 'react';
import {
  FormTab,
  TabbedForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  ImageInput,
  DateInput,
  BooleanInput,
} from 'react-admin';
import { validateRequired } from '@admin/components/utils/validate';
import Box from '@admin/components/Box';
import PromotionPreviewCard from './PromotionPreviewCard';
import { BoundedTextField } from '../BoundedTextField';
import { makeUrl } from '../utils/makeUrl';
import { PreviewImage } from '../previews/PreviewImage';
import PromotionPreviewPage from './PromotionPreviewPage';

const PromotionsBase = () => {
  const [name, setName] = useState<string>('');

  return (
    <TabbedForm id="promotion_form">
      <FormTab label="Акция">
        <Box>
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
            source="name"
            label="Название"
            validate={validateRequired}
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            resettable
            source="externalUrl"
            label="Ссылка на акцию на сайте рентала"
            validate={validateRequired}
          />
          <BoundedTextField
            label="ЧПУ"
            source="url"
            validate={validateRequired}
            disabled
            refValue={makeUrl(name)}
          />
          <TextInput
            resettable
            source="shortText"
            label="Текст в карточке"
            validate={validateRequired}
          />
          <TextInput
            resettable
            source="text"
            label="Описание акции"
            validate={validateRequired}
            multiline
            rows={8}
          />
          <SelectInput
            label="Тип акции"
            source="promotionType"
            defaultValue="new"
            choices={[
              { id: 'new', name: 'Новинка' },
              { id: 'sale', name: 'Скидка' },
            ]}
          />
          <DateInput label="Дата окончания акции" source="date" type="date" />
          <TextInput
            label="Текст для лейбла (на карточке)"
            source="promotionText"
            validate={validateRequired}
          />
          <ImageInput source="photos" validate={validateRequired} multiple>
            <PreviewImage source="photos" />
          </ImageInput>
          <BooleanInput
            source="showOnMainPage"
            label="Показывать в списке новостей на главной"
          />
        </Box>
      </FormTab>
      <FormTab label="СЕО">
        <Box>
          <TextInput resettable source="seo_title" label="Title" />
          <TextInput
            resettable
            source="seo_description"
            label="Meta description"
            multiline
            rows={4}
          />
          <TextInput
            resettable
            source="seo_keywords"
            label="Ключевые слова"
            multiline
            rows={4}
          />
        </Box>
      </FormTab>
      <FormTab label="Preview: Card">
        <PromotionPreviewCard />
      </FormTab>
      <FormTab label="Preview: Page">
        <PromotionPreviewPage />
      </FormTab>
    </TabbedForm>
  );
};

export default PromotionsBase;
