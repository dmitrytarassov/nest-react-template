import { City } from '@lib/types/City';

export interface ICrudRental {
  id: string;

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
