import React, { useEffect, useState } from 'react';
import { RentalsContext } from '@frontend/contexts/rentals.context';
import useSWR, { SWRResponse } from 'swr';
import { IRental } from '@lib/interfaces/IRental';
import { get } from '@frontend/utils/fetcher';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { useCity } from '@frontend/hooks/useCity';
import { ICrudRental } from '@lib/interfaces/ICrudRental';

export const RentalsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [init, setInit] = useState<boolean>(false);
  const { city } = useCity();
  const fetchData: SWRResponse<IControllerResponse<ICrudRental[]>> = useSWR(
    `/crud/rental?filter[]=city,${city}`,
    get,
  );

  useEffect(() => {
    if (init) {
      fetchData.mutate();
    }
  }, [city]);

  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <RentalsContext.Provider value={{ rentals: fetchData?.data?.data || [] }}>
      {children}
    </RentalsContext.Provider>
  );
};
