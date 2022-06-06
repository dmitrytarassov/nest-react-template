import React from 'react';
import { MapContainer, Marker } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import dynamic from 'next/dynamic';
import styled, { keyframes } from 'styled-components';
import 'leaflet/dist/leaflet.css';
import Markers from '@frontend/components/Markers';
import { DivIcon, divIcon } from 'leaflet';
import { renderToString } from 'react-dom/server';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .leaflet-container {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

const scale = keyframes`
  from, 20%, to {
    transform: scale(1);
  }

  14% {
    transform: scale(0.9);
  }
`;

const scaleSafe = keyframes`
  from, 20%, to {
    transform: translate(-50%, -50%) scale(1);
  }

  14% {
    transform: translate(-50%, -50%) scale(0.9);
  }
`;

const IconBase = styled.div`
  width: 134px;
  height: 134px;
  background: rgb(19 236 80 / 30%);
  display: flex;
  position: relative;
  border-radius: 50%;
  animation: ${scale} 5s linear infinite;

  :after {
    width: 46px;
    height: 46px;
    position: absolute;
    content: '';
    background: rgb(255 255 255 / 50%);
    border-radius: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    animation: ${scaleSafe} 5s linear infinite;
    animation-delay: 0.25s;
  }

  :before {
    width: 26px;
    height: 26px;
    position: absolute;
    content: '';
    background: #13ec50;
    border-radius: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    animation: ${scaleSafe} 5s linear infinite;
    animation-delay: 0.5s;
  }

  span {
    width: 8px;
    height: 8px;
    position: absolute;
    background: #fff;
    border-radius: 50%;
    z-index: 3;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    animation: ${scaleSafe} 5s linear infinite;
    animation-delay: 0.75s;
  }
`;

const currentLocationIcon = new DivIcon({
  iconSize: [134, 134],
  iconAnchor: [67, 67],
  html: renderToString(
    <IconBase>
      <span />
    </IconBase>,
  ),
});

const Map = ({ currentLocation }: { currentLocation?: [number, number] }) => {
  return (
    <Container>
      <MapContainer center={[0, 0]} zoom={10} attributionControl={false}>
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {currentLocation && (
          <Marker position={currentLocation} icon={currentLocationIcon} />
        )}
        <Markers currentLocation={currentLocation} />
      </MapContainer>
    </Container>
  );
};

export default dynamic(() => Promise.resolve(Map), {
  ssr: false,
});
