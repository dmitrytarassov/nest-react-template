import { City } from '@lib/types/City';
import { ISeo } from '@lib/interfaces/ISeo';

export interface ICrudRental extends ISeo {
  id: string;

  weight: number;

  name: string;

  email?: string;

  url: string;

  icon: string;

  address: string;

  coordinates: string;

  workingTime: string;

  vk?: string;

  telegram?: string;

  web?: string;

  rating: number;

  phone: string;

  city: City;

  delivery?: string;

  selfService?: string;

  repair?: string;

  insurance?: string;
}
