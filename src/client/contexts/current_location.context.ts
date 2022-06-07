import { createContext } from 'react';

export interface ICurrentLocationContext {
  coordinates: [number, number] | undefined;
  setCoordinates: (coords: [number, number]) => void;
}

export const CurrentLocationContext =
  createContext<ICurrentLocationContext>(null);
