import { createContext } from 'react';
import { City } from '@lib/types/City';

export interface ICityContext {
  city: City;
  setCity: (city: City) => void;
}

export const CityContext = createContext<ICityContext>({
  city: 'spb',
  setCity: () => {
    console.log('setCity do nothing');
    // do nothing
  },
});
