import { useContext } from 'react';
import { CityContext } from '@frontend/contexts/city.content';

export function useCity() {
  const context = useContext(CityContext);

  if (!context) {
    throw new Error(`Missing news context`);
  }

  return context;
}
