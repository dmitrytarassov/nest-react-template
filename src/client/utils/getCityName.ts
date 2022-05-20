import { City } from '@lib/types/City';

export function getCityName(city: City) {
  return {
    spb: 'Санкт-петербург',
    moscow: 'Москва',
  }[city];
}
