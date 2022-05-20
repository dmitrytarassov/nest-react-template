import React, { useState } from 'react';
import { CityContext } from '@frontend/contexts/city.content';
import { City } from '@lib/types/City';
import { get } from '@frontend/utils/fetcher';
import { updateMapRentals } from '@frontend/utils/updateMapRentals';

export const CityProvider = ({
  children,
  currentCity,
}: {
  children: React.ReactNode;
  currentCity: City;
}) => {
  const [city, setCity] = useState<City>(currentCity);

  const updateCity = async (city: City) => {
    const response = await get(`/api/city/set/${city}`);

    if (response?.data) {
      updateMapRentals([], '', 0);
      setTimeout(() => {
        setCity(response?.data);
      }, 300);
    }
  };

  return (
    <CityContext.Provider value={{ city, setCity: updateCity }}>
      {children}
    </CityContext.Provider>
  );
};
