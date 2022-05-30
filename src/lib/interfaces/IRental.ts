import { City } from '@lib/types/City';

export interface IRental {
  id: string;
  name: string;
  email?: string;
  url: string;
  icon: string;
  address: {
    name: string;
    coordinates: [number, number];
  };
  workingTime: string;
  socials: {
    vk?: string;
    telegram?: string;
    web?: string;
  };
  rating: number;
  phone: number;
  services: string[];
  city: City;
}
