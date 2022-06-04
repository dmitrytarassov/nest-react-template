import React, { useState } from 'react';
import styled from 'styled-components';
import { Create, ImageField } from 'react-admin';

import MapModal from '@admin/components/MapModal';
import RentalBase from './RentalBase';

const RentalAdd = (props) => {
  const [mapIsOpen, setMapIsOpen] = useState(false);
  const [city, setCity] = useState<string>('spb');
  const [coordinates, setCoordinates] = useState([0, 0]);

  const applyCoordinates = (coords) => {
    setCoordinates(coords);
    setMapIsOpen(false);
  };

  return (
    <>
      <MapModal open={mapIsOpen} city={city} onClose={applyCoordinates} />
      <Create {...props} redirect="edit">
        <RentalBase
          setMapIsOpen={setMapIsOpen}
          coordinates={coordinates}
          setCity={setCity}
        />
      </Create>
    </>
  );
};

export default RentalAdd;
