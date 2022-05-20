import React, { useEffect, useState } from 'react';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
// import { useMap } from 'react-leaflet/hooks';
import { Marker, Popup } from 'react-leaflet';
import dynamic from 'next/dynamic';
import styled, { css } from 'styled-components';
import 'leaflet/dist/leaflet.css';
import Markers from '@frontend/components/Markers';

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

const Map = () => {
  return (
    <Container>
      <MapContainer center={[0, 0]} zoom={10} attributionControl={false}>
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers />
        {/*<Marker position={[59.906701, 30.482708]} icon={icon} />*/}
      </MapContainer>
    </Container>
  );
};

export default dynamic(() => Promise.resolve(Map), {
  ssr: false,
});
