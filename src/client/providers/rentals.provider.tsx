import React, { useEffect, useState } from 'react';
import { RentalsContext } from '@frontend/contexts/rentals.context';
import useSWR, { SWRResponse } from 'swr';
import { IRental } from '@lib/interfaces/IRental';
import { get } from '@frontend/utils/fetcher';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { useCity } from '@frontend/hooks/useCity';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import parseRental from '@frontend/utils/parseRental';

export const RentalsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [init, setInit] = useState<boolean>(false);
  const fetchData: SWRResponse<IControllerResponse<ICrudRental[]>> = useSWR(
    '/crud/rental',
    get,
  );

  const { city } = useCity();

  useEffect(() => {
    if (init) {
      fetchData.mutate();
    }
  }, [city]);

  useEffect(() => {
    setInit(true);
  }, []);

  const _rentals: IRental[] = fetchData?.data?.data
    ? fetchData?.data?.data.map((e) => parseRental(e))
    : [];

  return (
    <RentalsContext.Provider value={{ rentals: _rentals }}>
      {children}
    </RentalsContext.Provider>
  );
};
