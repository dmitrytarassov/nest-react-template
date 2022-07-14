import React, { useEffect, useState } from 'react';
import { IMarker } from '@frontend/dtos/IMarker';
import { getElementStyle } from '@frontend/utils/getElementStyle';

export const MarkerRental: React.FC<
  IMarker & { map: any; onClick: () => void }
> = ({ map, coordinates, active, icon, onClick }) => {
  const [element, setElement] = useState<any>();
  useEffect(() => {
    const iconSize = active ? 80 : 40;
    const point = new (window as any).ymaps.Placemark(
      coordinates,
      {},
      {
        iconLayout: 'default#imageWithContent',
        iconImageHref: icon,
        iconImageSize: [iconSize, iconSize],
        iconImageOffset: [-iconSize / 2, -iconSize / 2],
      },
    );

    point.events.add('click', onClick);

    map.geoObjects.add(point);

    setTimeout(() => {
      const elements = [
        // @ts-ignore
        ...document.querySelectorAll('.ymaps-2-1-79-image-with-content'),
      ];
      elements.forEach((element) => {
        const image = getElementStyle(element, 'backgroundImage');
        console.log(image, icon);
        if (image.includes(icon)) {
          setElement(element);
        }
      });
    }, 100);

    return () => {
      map.geoObjects.remove(point);
    };
  }, [coordinates]);

  useEffect(() => {
    if (element) {
      setTimeout(() => {
        element.classList.add('rental_icon');
        console.log('Change');
        if (active) {
          const parent = element.parentNode.parentNode;
          if (parent.classList.contains('ymaps-2-1-79-placemark-overlay')) {
            [
              // @ts-ignore
              ...document.querySelectorAll('.ymaps-2-1-79-placemark-overlay'),
            ].forEach((e) => {
              e.classList.remove('active');
            });
            parent.classList.add('active');
          }
          const elements = [
            // @ts-ignore
            ...document.querySelectorAll('.ymaps-2-1-79-image-with-content'),
          ];
          elements.forEach((el) => {
            el.classList.remove('active');
          });
          element.classList.add('active');
        }
      }, 300);
    }
  }, [element, active]);
  return null;
};
