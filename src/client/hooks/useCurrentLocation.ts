import { useContext } from 'react';

import { CurrentLocationContext } from '@frontend/contexts/current_location.context';

export function useCurrentLocation() {
  const context = useContext(CurrentLocationContext);

  if (!context) {
    throw new Error(`Missing current location context`);
  }

  return context;
}
