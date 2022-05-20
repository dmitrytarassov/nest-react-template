import { createContext } from 'react';
import { FullRentalInfo } from '@frontend/dtos/FullRentalInfo';
import { IRental } from '@lib/interfaces/IRental';

export interface IRentalsContext {
  rentals: IRental[];
}

export const RentalsContext = createContext<IRentalsContext>({
  rentals: [],
});
