"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const dynamic_1 = require("next/dynamic");
const styled_components_1 = require("styled-components");
require("leaflet/dist/leaflet.css");
const Markers_1 = require("@frontend/components/Markers");
const theme_1 = require("../utils/theme");
const CurrentLocation_1 = require("@frontend/components/CurrentLocation");
const useCurrentLocation_1 = require("../hooks/useCurrentLocation");
const useCity_1 = require("../hooks/useCity");
const MarkerCurrentLocation_1 = require("@frontend/components/MarkerCurrentLocation");
const Container = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  position: relative;

  ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(70vh + 72px);
    `)}

  .leaflet-container {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;
const MapContainer = styled_components_1.default.div `
  position: relative;
  width: 100%;
  height: 100%;
`;
const _coordinates = {
    moscow: [55.751684, 37.618611],
    spb: [59.93863, 30.31413],
};
const Map = () => {
    const { coordinates: currentLocation } = (0, useCurrentLocation_1.useCurrentLocation)();
    const [map, setmap] = (0, react_1.useState)();
    const [ready, setready] = (0, react_1.useState)();
    const { city } = (0, useCity_1.useCity)();
    const init = () => {
        const myMap = new window.ymaps.Map('map', {
            center: _coordinates[city],
            zoom: 12,
            controls: [],
        });
        setmap(myMap);
        setTimeout(() => {
            setready(true);
        }, 100);
    };
    (0, react_1.useEffect)(() => {
        window.ymaps.ready(init);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsx)(MapContainer, { id: "map" }), map && currentLocation && ((0, jsx_runtime_1.jsx)(MarkerCurrentLocation_1.MarkerCurrentLocation, { position: currentLocation, map: map })), map && ready && (0, jsx_runtime_1.jsx)(Markers_1.default, { map: map }), (0, jsx_runtime_1.jsx)(CurrentLocation_1.default, {})] }));
};
exports.default = (0, dynamic_1.default)(() => Promise.resolve(Map), {
    ssr: false,
});
//# sourceMappingURL=Map.js.map