import React, { useEffect, useState } from 'react';
import { RentalsContext } from '@frontend/contexts/rentals.context';
import useSWR, { SWRResponse } from 'swr';
import { get } from '@frontend/utils/fetcher';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { useCity } from '@frontend/hooks/useCity';
import { ICrudRental } from '@lib/interfaces/ICrudRental';

export const RentalsProvider = ({
  children,
  _rentals = [],
}: {
  children: React.ReactNode;
  _rentals?: ICrudRental[];
}) => {
  const [init, setInit] = useState<boolean>(false);
  const { city } = useCity();
  const fetchData: SWRResponse<IControllerResponse<ICrudRental[]>> = useSWR(
    `/api/rental?filter[]=city,${city}`,
    get,
  );

  console.log('-----city', city);

  useEffect(() => {
    console.log(city, init);
    if (init) {
      fetchData.mutate();
    }
  }, [city]);

  useEffect(() => {
    setInit(true);
  }, []);

  console.log(fetchData?.data?.data);

  const rentals = fetchData?.data?.data || _rentals || [];

  return (
    <RentalsContext.Provider value={{ rentals }}>
      {children}
    </RentalsContext.Provider>
  );
};
