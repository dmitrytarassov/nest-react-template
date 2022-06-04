import RentalCard from '@frontend/components/pages/rentals/RentalCard';
import { theme } from '@frontend/utils/theme';
import { IRental } from '@lib/interfaces/IRental';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PreviewContainer, {
  PreviewPageContainer,
} from '../previews/PreviewContainer';

export default function RentalPreviewCard() {
  const [record, setRecord] = useState<IRental>({
    id: '',
    name: '',
    url: '',
    icon: '',
    address: {
      coordinates: [0, 0],
      name: '',
    },
    workingTime: '',
    rating: 9,
    phone: 79998887766,
    services: [],
    city: 'spb',
    socials: {},
  });

  const update = () => {
    // @ts-ignore
    const formData = new FormData(document.forms.rental_form);
    const name = `${formData.get('name')}`;
    const phone = formData.get('phone') ? +formData.get('phone') : 0;
    // @ts-ignore
    const photos =
      [
        // @ts-ignore
        ...(document.forms.rental_form?.querySelectorAll('.previews img') ||
          []),
      ]?.map((e) => e.src) || [];

    const address = `${formData.get('address')}`;

    setRecord((record) => ({
      ...record,
      name,
      phone: phone < 900000000 ? record.phone : phone,
      icon: photos[0] || '',
      address: {
        ...record.address,
        name: address,
      },
    }));
  };

  useEffect(() => {
    const id = setInterval(update, 3000);

    setTimeout(update, 100);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <PreviewContainer>
        <PreviewPageContainer>
          <RentalCard rental={record} active={false} />
        </PreviewPageContainer>
      </PreviewContainer>
    </ThemeProvider>
  );
}
