import React, { useEffect, useState } from 'react';
import { IMarker } from '@frontend/dtos/IMarker';
import { ESetMarkers } from '@frontend/dtos/ESetMarkers';
import styled, { css } from 'styled-components';
import marker from '@frontend/assets/marker.svg';
import markerHover from '@frontend/assets/marker-hover.svg';
import { DivIcon, LatLng } from 'leaflet';
import shadow from '@frontend/assets/shadow.svg';
import { renderToString } from 'react-dom/server';
import { Marker, useMap } from 'react-leaflet';
import { ESelectRental } from '@frontend/dtos/ESelectRental';

const IconBase = styled.div`
  background-image: url(${marker.src});
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;

  :hover {
    background-image: url(${markerHover.src});
  }

  :after {
    content: '';
    background-image: url(${shadow.src});
    position: absolute;
    top: 105%;
    left: 0;
    width: 100%;
    height: 10%;
    background-position: top center;
    background-repeat: no-repeat;
  }
`;

const IconImage = styled.img<{ active: boolean }>`
  object-fit: cover;
  border-radius: 100%;
  ${({ active }) =>
    active
      ? css`
          width: 60px !important;
          height: 60px !important;
          margin-left: 8px;
          margin-top: 8px;
        `
      : css`
          width: 30px !important;
          height: 30px !important;
          margin-left: 4px;
          margin-top: 4px;
        `}
`;

const getIcon = (src: string, active: boolean) =>
  new DivIcon({
    iconUrl: marker.src,
    shadowUrl: shadow.src,
    iconSize: active ? [76, 92] : [38, 46],
    iconAnchor: active ? [38, 92] : [19, 46],
    shadowSize: [19, 4],
    shadowAnchor: [9, 0],
    html: renderToString(
      <IconBase>
        <IconImage active={active} src={src} />
      </IconBase>,
    ),
  });

const Markers = () => {
  const [markers, setMarkers] = useState<IMarker[]>([]);
  const [center, setCenter] = useState<[number, number]>([0, 0]);
  const map = useMap();

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

        if (activeMarker) {
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
        setMarkers([]);
      }
    });
  }, []);

  const selectRental = (rentalId: string) => {
    window.dispatchEvent(new CustomEvent(ESelectRental, { detail: rentalId }));
  };

  useEffect(() => {
    map.panTo(new LatLng(+center[0].toFixed(6), +center[1].toFixed(6)));
  }, [center.join('-')]);

  return (
    <>
      {markers.map((marker) => (
        <Marker
          key={marker.rentalId}
          position={marker.coordinates}
          icon={getIcon(marker.icon, marker.active)}
          eventHandlers={{
            click: (e) => selectRental(marker.rentalId),
          }}
        />
      ))}
    </>
  );
};

export default Markers;
