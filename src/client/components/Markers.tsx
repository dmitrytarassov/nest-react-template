import React, { useEffect, useState } from 'react';
import { IMarker } from '@frontend/dtos/IMarker';
import { ESetMarkers } from '@frontend/dtos/ESetMarkers';
import { ESelectRental } from '@frontend/dtos/ESelectRental';
import imageUrl from '@frontend/utils/imageUrl';
import { MarkerRental } from '@frontend/components/MarkerRental';

const Markers = ({ map }: { map: any }) => {
  const [markers, setMarkers] = useState<IMarker[]>([]);
  const [center, setCenter] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    window.addEventListener(ESetMarkers, (e) => {
      // @ts-ignore
      const _markers: IMarker[] = e?.detail || [];

      if (_markers.length) {
        const activeMarker = _markers.find(({ active }) => active);
        _markers.find(({ active }) => active);
        const activeId: string = activeMarker?.rentalId || '';

        setMarkers((oldMarkers) => {
          const oldIds: string[] = oldMarkers.map(({ rentalId }) => rentalId);
          const oldMarkersCopy = [...oldMarkers];
          _markers.forEach((marker) => {
            if (!oldIds.includes(marker.rentalId)) {
              oldMarkersCopy.push(marker);
            }
          });

          return oldMarkersCopy.map((marker) => {
            marker.active = marker.rentalId === activeId;
            return marker;
          });
        });

        if (activeMarker?.coordinates) {
          setCenter(activeMarker.coordinates);
        } else {
          setCenter(
            _markers.reduce(
              (acc, marker) => {
                acc[0] += marker.coordinates[0] / _markers.length;
                acc[1] += marker.coordinates[1] / _markers.length;
                return acc;
              },
              [0, 0],
            ),
          );
        }
      } else {
        // setMarkers([]);
      }
    });
  }, []);

  const selectRental = (rentalId: string) => () => {
    window.dispatchEvent(new CustomEvent(ESelectRental, { detail: rentalId }));
  };

  useEffect(() => {
    if (center.join() !== '0,0') {
      map.setCenter(center);
    }
  }, [center.join()]);

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
          onClick={selectRental(marker.rentalId)}
        />
      ))}
    </>
  );
};

export default Markers;
