import React, { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { DivIcon } from 'leaflet';
import { renderToString } from 'react-dom/server';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const StyledMapModal = styled.div`
  width: 600px;
  height: 632px;
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;

const Coordinates = styled.span`
  line-height: 20px;
  margin-bottom: 12px;
`;

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

interface MapModalProps {
  open: boolean;
  city?: string;
  onClose: (v?: number[]) => void;
  coordinates?: number[];
}

Modal.setAppElement('#__next');

const _coordinates = {
  moscow: [55.558741, 37.378847],
  spb: [59.93863, 30.31413],
};

const Icon = () => (
  <svg
    width="48"
    height="56"
    viewBox="0 0 48 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse opacity="0.3" cx="24.5" cy="54" rx="9.5" ry="2" fill="#13EC50" />
    <path
      d="M43 21.7755C43 35.3878 24.475 49 24.475 49C24.475 49 5 35.3878 5 21.7755C5 11.4061 13.5066 3 24 3C34.4934 3 43 11.4061 43 21.7755Z"
      fill="#13EC50"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

const _icon = new DivIcon({
  iconUrl: '/public/marker.svg',
  shadowUrl: '/public/shadow.svg',
  iconSize: [48, 56],
  iconAnchor: [48, 56],
  shadowSize: [19, 4],
  shadowAnchor: [9, 0],
  html: renderToString(<Icon />),
});

function DraggableMarker({ center, setCoordinates }) {
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const coords = marker.getLatLng();
          setCoordinates([coords.lat, coords.lng]);
          setPosition([coords.lat, coords.lng]);
        }
      },
    }),
    [],
  );

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
      icon={_icon}
    />
  );
}

const MapModal = ({
  open,
  city,
  onClose,
  coordinates: _defaultCoordinates,
}: MapModalProps) => {
  const center =
    _defaultCoordinates?.length && _defaultCoordinates[0] !== 0
      ? _defaultCoordinates
      : _coordinates[city] || _coordinates['spb'];

  const [coordinates, setCoordinates] = useState(center);

  return (
    <Modal
      isOpen={open}
      style={customStyles}
      contentLabel="Карта"
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
    >
      <StyledMapModal>
        <Coordinates>
          Координаты: {coordinates.join(', ')}{' '}
          <button onClick={() => onClose(coordinates)}>Принять</button>
          <button onClick={() => onClose()}>Закрыть (без сохранения)</button>
        </Coordinates>
        <Container>
          <MapContainer center={center} zoom={10} attributionControl={false}>
            <TileLayer
              attribution=""
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <DraggableMarker center={center} setCoordinates={setCoordinates} />
          </MapContainer>
        </Container>
      </StyledMapModal>
    </Modal>
  );
};

export default MapModal;
