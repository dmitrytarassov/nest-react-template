import React, { useEffect, useState } from 'react';
import { useRentals } from '@frontend/hooks/useRentals';
import { ESelectRental } from '@frontend/dtos/ESelectRental';
import RentalCard from '@frontend/components/pages/rentals/RentalCard';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import ListTop from '@frontend/components/ListTop';
import PageMainColumnContainer from '@frontend/components/PageMainColumnContainer';
import { updateMapRentals } from '@frontend/utils/updateMapRentals';

const RentalsPage = () => {
  const { rentals } = useRentals();
  const [active, setActive] = useState<string>('');
  const [searchString, setSearchString] = useState<string>('');

  useEffect(() => {
    updateMapRentals(rentals, active);
  }, [rentals, active]);

  useEffect(() => {
    function callBack(e) {
      // @ts-ignore
      setActive(e.detail || '');
    }
    window.addEventListener(ESelectRental, callBack);

    return () => {
      window.removeEventListener(ESelectRental, callBack);
    };
  }, []);

  const breadcrumbs: IBreadCrumb[] = [
    {
      name: 'Главная',
      link: '/',
    },
    {
      name: 'Список ренталов',
      link: '/rentals',
    },
  ];

  const filteredRentals =
    searchString === ''
      ? rentals
      : rentals.filter(
          ({ name, address: { name: addressName } }) =>
            name.toLowerCase().includes(searchString.toLowerCase()) ||
            addressName.toLowerCase().includes(searchString.toLowerCase()),
        );

  return (
    <PageMainColumnContainer>
      <ListTop
        breadcrumbs={breadcrumbs}
        backLink="/"
        title="Список ренталов"
        search={{ value: searchString, onChange: setSearchString }}
      />

      {filteredRentals.map((rental) => (
        <RentalCard
          key={rental.id}
          rental={rental}
          active={active === rental.id}
        />
      ))}
    </PageMainColumnContainer>
  );
};

export default RentalsPage;
