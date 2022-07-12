import React, { useEffect, useState } from 'react';
import { useRentals } from '@frontend/hooks/useRentals';
import { IMarker } from '@frontend/dtos/IMarker';
import { MapContext } from '@frontend/contexts/map.content';

export const MapProvider = ({ children }: { children: React.ReactNode }) => {
  const { rentals } = useRentals();
  const [markers, setMarkers] = useState<IMarker[]>([]);
  const [center, setCenter] = useState<[number, number]>();
  const [zoom, setZom] = useState<12 | 14>(12);
  const [activeRental, setActiveRental] = useState<string>('');

  useEffect(() => {
    // @ts-ignore
    const _markers: IMarker[] = rentals.map((e) => ({
      icon: e.icon,
      rentalId: e.id,
      coordinates: e.coordinates.split(','),
      active: false,
    }));
    setMarkers(_markers);
  }, [rentals.map(({ id }) => id).join()]);

  useEffect(() => {
    const active = markers.find(({ active }) => active);
    if (active) {
      setCenter(active.coordinates);
      setZom(14);
    } else {
      setCenter(
        markers.reduce(
          (acc, marker) => {
            acc[0] += marker.coordinates[0] / markers.length;
            acc[1] += marker.coordinates[1] / markers.length;
            return acc;
          },
          [0, 0],
        ),
      );
      setZom(12);
    }
  }, [markers]);

  const selectRental = (id: string) => {
    setActiveRental(id);
    setMarkers((markers) =>
      markers.map((m) => ({
        ...m,
        active: m.rentalId === id,
      })),
    );
  };

  return (
    <MapContext.Provider
      value={{ markers, selectRental, center, zoom, activeRental }}
    >
      {children}
    </MapContext.Provider>
  );
};
