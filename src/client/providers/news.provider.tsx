import React, { useEffect, useState } from 'react';
import useSWR, { SWRResponse } from 'swr';
import { get } from '@frontend/utils/fetcher';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { IPromotion } from '@lib/interfaces/IPromotion';
import { NewsContext } from '@frontend/contexts/news.context';

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [news, setNews] = useState<IPromotion[]>([]);

  const fetchData: SWRResponse<IControllerResponse<IPromotion[]>> = useSWR(
    '/api/promotions/news',
    get,
  );

  useEffect(() => {
    if (fetchData.data) {
      setNews(fetchData.data.data);
    }
  }, [fetchData.data]);

  return (
    <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>
  );
};
