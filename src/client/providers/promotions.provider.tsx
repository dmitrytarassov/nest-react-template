import React, { useEffect, useState } from 'react';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { PromotionsContext } from '@frontend/contexts/promotions.context';
import { loadAllPromotions } from '@frontend/utils/loaders';
import { useCity } from '@frontend/hooks/useCity';

export const PromotionsProvider = ({
  children,
  _promotions = [],
}: {
  children: React.ReactNode;
  _promotions?: ICrudPromotion[];
}) => {
  const { city } = useCity();
  const [promotions, setPromotions] = useState<ICrudPromotion[]>(_promotions);
  const [init, setInit] = useState<boolean>();

  const load = async () => {
    const data = await loadAllPromotions(city, true);
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

  return (
    <PromotionsContext.Provider value={{ promotions }}>
      {children}
    </PromotionsContext.Provider>
  );
};
