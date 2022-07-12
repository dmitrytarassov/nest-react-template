import React, { useEffect, useState } from 'react';
import { IMarker } from '@frontend/dtos/IMarker';
import { ESetMarkers } from '@frontend/dtos/ESetMarkers';
import { ESelectRental } from '@frontend/dtos/ESelectRental';
import imageUrl from '@frontend/utils/imageUrl';
import { MarkerRental } from '@frontend/components/MarkerRental';
import { useRentals } from '@frontend/hooks/useRentals';
import { useMap } from '@frontend/hooks/useMap';

const Markers = ({ map }: { map: any }) => {
  const { markers, center, zoom, selectRental } = useMap();

  useEffect(() => {
    if (center) {
      map.setCenter(center);
    }
  }, [center]);

  useEffect(() => {
    console.log(zoom);
    map.setZoom(zoom);
  }, [zoom]);

  if (!(window as any)._map) {
    (window as any)._map = map;
  }
  // const [markers, setMarkers] = useState<IMarker[]>([]);
  // const [center, setCenter] = useState<[number, number]>([0, 0]);
  // const { rentals } = useRentals();

  // useEffect(() => {
  //   const active = markers.find(({ active }) => active);
  //   // @ts-ignore
  //   const _markers: IMarker[] = rentals.map((e) => ({
  //     icon: e.icon,
  //     rentalId: e.id,
  //     coordinates: e.coordinates.split(','),
  //     active: false,
  //   }));
  //   setMarkers(_markers);
  // }, [rentals.map(({ id }) => id).join()]);

  // useEffect(() => {
  //   window.addEventListener(ESetMarkers, (e) => {
  //     // @ts-ignore
  //     const _markers: IMarker[] = e?.detail || [];
  //
  //     if (_markers.length) {
  //       const activeMarker = _markers.find(({ active }) => active);
  //       _markers.find(({ active }) => active);
  //       const activeId: string = activeMarker?.rentalId || '';
  //
  //       setMarkers((oldMarkers) => {
  //         const oldIds: string[] = oldMarkers.map(({ rentalId }) => rentalId);
  //         const oldMarkersCopy = [...oldMarkers];
  //         _markers.forEach((marker) => {
  //           if (!oldIds.includes(marker.rentalId)) {
  //             oldMarkersCopy.push(marker);
  //           }
  //         });
  //
  //         return oldMarkersCopy.map((marker) => {
  //           marker.active = marker.rentalId === activeId;
  //           return marker;
  //         });
  //       });
  //
  //       if (activeMarker?.coordinates) {
  //         setCenter(activeMarker.coordinates);
  //       } else {
  //         setCenter(
  //           _markers.reduce(
  //             (acc, marker) => {
  //               acc[0] += marker.coordinates[0] / _markers.length;
  //               acc[1] += marker.coordinates[1] / _markers.length;
  //               return acc;
  //             },
  //             [0, 0],
  //           ),
  //         );
  //       }
  //     } else {
  //       // setMarkers([]);
  //     }
  //   });
  // }, []);
  //
  // const selectRental = (rentalId: string) => () => {
  //   selectRental(rentalId);
  // };
  //
  // useEffect(() => {
  //   if (center.join() !== '0,0') {
  //     if (markers.find(({ active }) => active)) {
  //       if (window.innerWidth < window.innerHeight) {
  //         map.setCenter([center[0] - 0.006, center[1]], 14);
  //       } else {
  //         map.setCenter(center, 14);
  //       }
  //     } else {
  //       map.setCenter(center);
  //     }
  //   }
  // }, [center.join()]);

  return (
    <>
      {markers.map((marker) => (
        <MarkerRental
          key={marker.rentalId}
          coordinates={marker.coordinates}
          icon={imageUrl(marker.icon)}
          map={map}
          active={marker.active}
          rentalId={marker.rentalId}
          onClick={() => selectRental(marker.rentalId)}
        />
      ))}
    </>
  );
};

export default Markers;
