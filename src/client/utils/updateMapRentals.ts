import { IRental } from '@lib/interfaces/IRental';
import { ESetMarkers } from '@frontend/dtos/ESetMarkers';
import { ICrudRental } from '@lib/interfaces/ICrudRental';

export function updateMapRentals(
  rentals: ICrudRental[],
  active: string,
  timeout = 200,
) {
  const detail = rentals.map(({ coordinates, id: rentalId, icon }) => ({
    coordinates: coordinates.split(',').map((a) => +a),
    rentalId,
    active: rentalId === active,
    icon,
  }));

  setTimeout(() => {
    window.dispatchEvent(new CustomEvent(ESetMarkers, { detail }));
  }, timeout);
}
