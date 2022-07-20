import { City } from '@lib/types/City';

export function getCityName(city: City) {
  return {
    spb: 'Санкт-Петербург',
    moscow: 'Москва',
  }[city];
}
