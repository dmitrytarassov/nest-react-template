import React, { useEffect, useState } from 'react';
import { RentalsContext } from '@frontend/contexts/rentals.context';
import useSWR, { SWRResponse } from 'swr';
import { IRental } from '@lib/interfaces/IRental';
import { get } from '@frontend/utils/fetcher';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { useCity } from '@frontend/hooks/useCity';

export const RentalsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [init, setInit] = useState<boolean>(false);
  const [rentals, setRentals] = useState<IRental[]>([]);
  const fetchData: SWRResponse<IControllerResponse<IRental[]>> = useSWR(
    '/api/rentals',
    get,
  );

  const { city } = useCity();

  useEffect(() => {
    if (init) {
      fetchData.mutate();
    }
  }, [city]);

  useEffect(() => {
    if (fetchData.data) {
      setRentals(fetchData.data.data);
    }
  }, [fetchData.data]);

  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <RentalsContext.Provider value={{ rentals }}>
      {children}
    </RentalsContext.Provider>
  );
};
