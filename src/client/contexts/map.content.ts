import { createContext } from 'react';
import { City } from '@lib/types/City';
import { IMarker } from '@frontend/dtos/IMarker';

export interface IMapContext {
  markers: IMarker[];
  selectRental: (id: string) => void;
  center?: [number, number];
  zoom: 12 | 14;
  activeRental: string;
}

export const MapContext = createContext<IMapContext>({
  markers: [],
  selectRental: () => {
    console.log('selectRental do nothing');
    // do nothing
  },
  zoom: 14,
  activeRental: '',
});
