import { IRental } from '@lib/interfaces/IRental';
import { ESetMarkers } from '@frontend/dtos/ESetMarkers';

export function updateMapRentals(
  rentals: IRental[],
  active: string,
  timeout = 200,
) {
  const detail = rentals.map(
    ({ address: { coordinates }, id: rentalId, icon }) => ({
      coordinates,
      rentalId,
      active: rentalId === active,
      icon,
    }),
  );

  setTimeout(() => {
    window.dispatchEvent(new CustomEvent(ESetMarkers, { detail }));
  }, timeout);
}
