import React, { useState } from 'react';
import { Edit } from 'react-admin';
import MapModal from '@admin/components/MapModal';
import RentalBase from './RentalBase';

const RentalEdit = (props) => {
  const [mapIsOpen, setMapIsOpen] = useState(false);
  const [city, setCity] = useState<string>('spb');
  const [coordinates, setCoordinates] = useState([0, 0]);

  const applyCoordinates = (coords) => {
    setCoordinates(coords);
    setMapIsOpen(false);
  };

  return (
    <>
      <MapModal
        open={mapIsOpen}
        city={city}
        onClose={applyCoordinates}
        coordinates={coordinates}
      />
      <Edit {...props} redirect="edit">
        <RentalBase
          coordinates={coordinates}
          setCity={setCity}
          setMapIsOpen={setMapIsOpen}
        />
      </Edit>
    </>
  );
};

export default RentalEdit;
