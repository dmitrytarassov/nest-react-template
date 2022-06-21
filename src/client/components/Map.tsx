import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styled, { css } from 'styled-components';
import 'leaflet/dist/leaflet.css';
import Markers from '@frontend/components/Markers';
import { WithTheme } from '@frontend/utils/theme';
import CurrentLocation from '@frontend/components/CurrentLocation';
import { useCurrentLocation } from '@frontend/hooks/useCurrentLocation';
import { useCity } from '@frontend/hooks/useCity';
import { MarkerCurrentLocation } from '@frontend/components/MarkerCurrentLocation';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(70vh + 72px);
    `)}

  .leaflet-container {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const _coordinates: {
  [key: string]: [number, number];
} = {
  moscow: [55.751684, 37.618611],
  spb: [59.93863, 30.31413],
};

const Map = () => {
  const { coordinates: currentLocation } = useCurrentLocation();
  const [map, setmap] = useState<any>();
  const [ready, setready] = useState<boolean>();
  const { city } = useCity();

  const init = () => {
    const myMap = new (window as any).ymaps.Map('map', {
      center: _coordinates[city],
      zoom: 12,
      controls: [],
    });
    setmap(myMap);
    setTimeout(() => {
      setready(true);
    }, 100);
  };

  useEffect(() => {
    (window as any).ymaps.ready(init);
  }, []);

  return (
    <Container>
      <MapContainer id="map" />
      {map && currentLocation && (
        <MarkerCurrentLocation position={currentLocation} map={map} />
      )}
      {map && ready && <Markers map={map} />}
      <CurrentLocation />
    </Container>
  );
};

export default dynamic(() => Promise.resolve(Map), {
  ssr: false,
});
