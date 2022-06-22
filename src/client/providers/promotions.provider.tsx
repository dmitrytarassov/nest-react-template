import React, { useEffect, useState } from 'react';
import { IPromotion } from '@lib/interfaces/IPromotion';
import { PromotionsContext } from '@frontend/contexts/promotions.context';
import { loadAllPromotions } from '@frontend/utils/loaders';
import { useCity } from '@frontend/hooks/useCity';

export const PromotionsProvider = ({
  children,
  _promotions = [],
}: {
  children: React.ReactNode;
  _promotions?: IPromotion[];
}) => {
  const { city } = useCity();
  const [promotions, setPromotions] = useState<IPromotion[]>(_promotions);
  const [init, setInit] = useState<boolean>();

  const load = async () => {
    const data = await loadAllPromotions(city);
    setPromotions(data);
    setInit(true);
  };

  useEffect(() => {
    if (init) {
      load();
    }
  }, [city]);

  useEffect(() => {
    if (!_promotions.length) {
      load();
    } else {
      setInit(true);
    }
  }, []);

  promotions.forEach((d) => {
    console.log(d.url);
  });

  return (
    <PromotionsContext.Provider value={{ promotions }}>
      {children}
    </PromotionsContext.Provider>
  );
};
