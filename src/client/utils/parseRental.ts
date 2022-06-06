import { IRental } from '@lib/interfaces/IRental';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import imageUrl from './imageUrl';

export default function parseRental(_rental: ICrudRental): IRental {
  const [lat, lan] = _rental.coordinates.split(',');
  const rental: IRental = {
    id: _rental.id,
    name: _rental.name,
    email: _rental.email,
    url: _rental.url,
    icon: imageUrl(_rental.icon),
    address: {
      name: _rental.address,
      coordinates: [+lat || 0, +lan || 0],
    },
    socials: {
      vk: _rental.vk,
      telegram: _rental.telegram,
      web: _rental.web,
    },
    workingTime: _rental.workingTime,
    rating: _rental.rating,
    phone: +_rental.phone,
    services: [],
    city: _rental.city,
    insurance: _rental.insurance,
    delivery: _rental.delivery,
    selfService: _rental.selfService,
    repair: _rental.repair,
  };

  return rental;
}
