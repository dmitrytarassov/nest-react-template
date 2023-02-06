"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const IMarker_1 = require("../dtos/IMarker");
const ESetMarkers_1 = require("../dtos/ESetMarkers");
const ESelectRental_1 = require("../dtos/ESelectRental");
const imageUrl_1 = require("../utils/imageUrl");
const MarkerRental_1 = require("@frontend/components/MarkerRental");
const useRentals_1 = require("../hooks/useRentals");
const useMap_1 = require("../hooks/useMap");
const Markers = ({ map }) => {
    const { markers, center, zoom, selectRental } = (0, useMap_1.useMap)();
    (0, react_1.useEffect)(() => {
        if (center) {
            map.setCenter(center);
        }
    }, [center]);
    (0, react_1.useEffect)(() => {
        map.setZoom(zoom);
    }, [zoom]);
    if (!window._map) {
        window._map = map;
    }
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: markers.map((marker) => ((0, jsx_runtime_1.jsx)(MarkerRental_1.MarkerRental, { coordinates: marker.coordinates, icon: (0, imageUrl_1.default)(marker.icon), map: map, active: marker.active, rentalId: marker.rentalId, onClick: () => selectRental(marker.rentalId) }, marker.rentalId))) }));
};
exports.default = Markers;
//# sourceMappingURL=Markers.js.map