import React, { useEffect } from 'react';

interface MarkerProps {
  map: any;
  position: [number, number];
}

export const MarkerCurrentLocation: React.FC<MarkerProps> = ({
  map,
  position,
}) => {
  useEffect(() => {
    const point = new (window as any).ymaps.Placemark(
      position,
      {},
      {
        iconLayout: 'default#imageWithContent',
        iconImageHref: '/public/your_position.svg',
        iconImageSize: [134, 134],
        iconImageOffset: [-134 / 2, -134 / 2],
      },
    );

    map.setCenter(position, 12);

    map.geoObjects.add(point);

    return () => {
      map.geoObjects.remove(point);
    };
  }, [position]);

  return null;
};
