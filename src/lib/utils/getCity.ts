import { City } from '@lib/types/City';

export const getCity = (city: string): City =>
  ['spb', 'moscow'].includes(city) ? (city as City) : 'spb';
