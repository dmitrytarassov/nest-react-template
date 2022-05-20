import { useContext } from 'react';
import { RentalsContext } from '@frontend/contexts/rentals.context';

export function useRentals() {
  const context = useContext(RentalsContext);

  if (!context) {
    throw new Error(`Missing promotions context`);
  }

  return context;
}
