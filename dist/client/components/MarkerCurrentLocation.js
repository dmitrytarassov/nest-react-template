"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkerCurrentLocation = void 0;
const react_1 = require("react");
const MarkerCurrentLocation = ({ map, position, }) => {
    (0, react_1.useEffect)(() => {
        const point = new window.ymaps.Placemark(position, {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: '/public/your_position.svg',
            iconImageSize: [134, 134],
            iconImageOffset: [-134 / 2, -134 / 2],
        });
        map.setCenter(position, 12);
        map.geoObjects.add(point);
        return () => {
            map.geoObjects.remove(point);
        };
    }, [position]);
    return null;
};
exports.MarkerCurrentLocation = MarkerCurrentLocation;
//# sourceMappingURL=MarkerCurrentLocation.js.map