import { useContext } from 'react';
import { MapContext } from '@frontend/contexts/map.content';

export function useMap() {
  const context = useContext(MapContext);

  if (!context) {
    throw new Error(`Missing map context`);
  }

  return context;
}
