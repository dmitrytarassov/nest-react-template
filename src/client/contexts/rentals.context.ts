import { createContext } from 'react';
import { ICrudRental } from '@lib/interfaces/ICrudRental';

export interface IRentalsContext {
  rentals: ICrudRental[];
}

export const RentalsContext = createContext<IRentalsContext>({
  rentals: [],
});
