import React, { useEffect, useState } from 'react';
import { useRentals } from '@frontend/hooks/useRentals';
import { ESelectRental } from '@frontend/dtos/ESelectRental';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import ListTop from '@frontend/components/ListTop';
import PageMainColumnContainer from '@frontend/components/PageMainColumnContainer';
import { updateMapRentals } from '@frontend/utils/updateMapRentals';
import RentalCard from '@frontend/components/pages/rentals/RentalCard';
import NotFound from '@frontend/components/NotFound';

const RentalsPage = () => {
  const { rentals } = useRentals();
  const [active, setActive] = useState<string>('');
  const [searchString, setSearchString] = useState<string>('');

  useEffect(() => {
    updateMapRentals(rentals, active);
  }, [rentals, active]);

  useEffect(() => {
    function callBack(e) {
      setSearchString('');
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
          // @ts-ignore
          ({ name, address }) =>
            name.toLowerCase().includes(searchString.toLowerCase()) ||
            address.toLowerCase().includes(searchString.toLowerCase()),
        );

  return (
    <PageMainColumnContainer>
      <ListTop
        breadcrumbs={breadcrumbs}
        backLink="/"
        title="Список ренталов"
        search={{ value: searchString, onChange: setSearchString }}
      />

      {filteredRentals.length > 0 ? (
        filteredRentals.map((rental) => (
          <RentalCard
            key={rental.id}
            rental={rental}
            active={active === rental.id}
          />
        ))
      ) : (
        <NotFound />
      )}
    </PageMainColumnContainer>
  );
};

export default RentalsPage;
