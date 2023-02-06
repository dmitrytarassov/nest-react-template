"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useRentals_1 = require("../hooks/useRentals");
const IMarker_1 = require("../dtos/IMarker");
const map_content_1 = require("../contexts/map.content");
const MapProvider = ({ children }) => {
    const { rentals } = (0, useRentals_1.useRentals)();
    const [markers, setMarkers] = (0, react_1.useState)([]);
    const [center, setCenter] = (0, react_1.useState)();
    const [zoom, setZom] = (0, react_1.useState)(12);
    const [activeRental, setActiveRental] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        const _markers = rentals.map((e) => ({
            icon: e.icon,
            rentalId: e.id,
            coordinates: e.coordinates.split(','),
            active: false,
        }));
        setMarkers(_markers);
    }, [rentals.map(({ id }) => id).join()]);
    (0, react_1.useEffect)(() => {
        const active = markers.find(({ active }) => active);
        if (active) {
            setCenter(active.coordinates);
            setZom(14);
        }
        else {
            setCenter(markers.reduce((acc, marker) => {
                acc[0] += marker.coordinates[0] / markers.length;
                acc[1] += marker.coordinates[1] / markers.length;
                return acc;
            }, [0, 0]));
            setZom(12);
        }
    }, [markers]);
    const selectRental = (id) => {
        setActiveRental(id);
        setMarkers((markers) => markers.map((m) => (Object.assign(Object.assign({}, m), { active: m.rentalId === id }))));
    };
    return ((0, jsx_runtime_1.jsx)(map_content_1.MapContext.Provider, Object.assign({ value: { markers, selectRental, center, zoom, activeRental } }, { children: children })));
};
exports.MapProvider = MapProvider;
//# sourceMappingURL=map.provider.js.map