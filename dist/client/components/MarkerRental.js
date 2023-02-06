"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkerRental = void 0;
const react_1 = require("react");
const IMarker_1 = require("../dtos/IMarker");
const getElementStyle_1 = require("../utils/getElementStyle");
const MarkerRental = ({ map, coordinates, active, icon, onClick }) => {
    const [element, setElement] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const iconSize = active ? 80 : 40;
        const point = new window.ymaps.Placemark(coordinates, {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: icon,
            iconImageSize: [iconSize, iconSize],
            iconImageOffset: [-iconSize / 2, -iconSize / 2],
        });
        point.events.add('click', onClick);
        map.geoObjects.add(point);
        setTimeout(() => {
            const elements = [
                ...document.querySelectorAll('.ymaps-2-1-79-image-with-content'),
            ];
            elements.forEach((element) => {
                const image = (0, getElementStyle_1.getElementStyle)(element, 'backgroundImage');
                if (image.includes(icon)) {
                    setElement(element);
                }
            });
        }, 100);
        return () => {
            map.geoObjects.remove(point);
        };
    }, [coordinates]);
    (0, react_1.useEffect)(() => {
        if (element) {
            setTimeout(() => {
                element.classList.add('rental_icon');
                if (active) {
                    const parent = element.parentNode.parentNode;
                    if (parent.classList.contains('ymaps-2-1-79-placemark-overlay')) {
                        [
                            ...document.querySelectorAll('.ymaps-2-1-79-placemark-overlay'),
                        ].forEach((e) => {
                            e.classList.remove('active');
                        });
                        parent.classList.add('active');
                    }
                    const elements = [
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
exports.MarkerRental = MarkerRental;
//# sourceMappingURL=MarkerRental.js.map