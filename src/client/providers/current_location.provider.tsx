import React, { useState } from 'react';
import {
  CurrentLocationContext,
  ICurrentLocationContext,
} from '@frontend/contexts/current_location.context';

export const CurrentLocationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [coordinates, setCoordinates] =
    useState<ICurrentLocationContext['coordinates']>();

  return (
    <CurrentLocationContext.Provider value={{ coordinates, setCoordinates }}>
      {children}
    </CurrentLocationContext.Provider>
  );
};
