"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const react_modal_1 = require("react-modal");
const react_leaflet_1 = require("react-leaflet");
require("leaflet/dist/leaflet.css");
const leaflet_1 = require("leaflet");
const server_1 = require("react-dom/server");
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const StyledMapModal = styled_components_1.default.div `
  width: 600px;
  height: 632px;
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;
const Coordinates = styled_components_1.default.span `
  line-height: 20px;
  margin-bottom: 12px;
`;
const Container = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  position: relative;

  .leaflet-container {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;
react_modal_1.default.setAppElement('#__next');
const _coordinates = {
    moscow: [55.558741, 37.378847],
    spb: [59.93863, 30.31413],
};
const Icon = () => ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "48", height: "56", viewBox: "0 0 48 56", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("ellipse", { opacity: "0.3", cx: "24.5", cy: "54", rx: "9.5", ry: "2", fill: "#13EC50" }), (0, jsx_runtime_1.jsx)("path", { d: "M43 21.7755C43 35.3878 24.475 49 24.475 49C24.475 49 5 35.3878 5 21.7755C5 11.4061 13.5066 3 24 3C34.4934 3 43 11.4061 43 21.7755Z", fill: "#13EC50", stroke: "white", strokeWidth: "2" })] })));
const _icon = new leaflet_1.DivIcon({
    iconUrl: '/public/marker.svg',
    shadowUrl: '/public/shadow.svg',
    iconSize: [48, 56],
    iconAnchor: [48, 56],
    shadowSize: [19, 4],
    shadowAnchor: [9, 0],
    html: (0, server_1.renderToString)((0, jsx_runtime_1.jsx)(Icon, {})),
});
function DraggableMarker({ center, setCoordinates }) {
    const [position, setPosition] = (0, react_1.useState)(center);
    const markerRef = (0, react_1.useRef)(null);
    const eventHandlers = (0, react_1.useMemo)(() => ({
        dragend() {
            const marker = markerRef.current;
            if (marker != null) {
                const coords = marker.getLatLng();
                setCoordinates([coords.lat, coords.lng]);
                setPosition([coords.lat, coords.lng]);
            }
        },
    }), []);
    return ((0, jsx_runtime_1.jsx)(react_leaflet_1.Marker, { draggable: true, eventHandlers: eventHandlers, position: position, ref: markerRef, icon: _icon }));
}
const MapModal = ({ open, city, onClose, coordinates: _defaultCoordinates, }) => {
    const center = (_defaultCoordinates === null || _defaultCoordinates === void 0 ? void 0 : _defaultCoordinates.length) && _defaultCoordinates[0] !== 0
        ? _defaultCoordinates
        : _coordinates[city] || _coordinates['spb'];
    const [coordinates, setCoordinates] = (0, react_1.useState)(center);
    return ((0, jsx_runtime_1.jsx)(react_modal_1.default, Object.assign({ isOpen: open, style: customStyles, contentLabel: "\u041A\u0430\u0440\u0442\u0430", shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true }, { children: (0, jsx_runtime_1.jsxs)(StyledMapModal, { children: [(0, jsx_runtime_1.jsxs)(Coordinates, { children: ["\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B: ", coordinates.join(', '), ' ', (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => onClose(coordinates) }, { children: "\u041F\u0440\u0438\u043D\u044F\u0442\u044C" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => onClose() }, { children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C (\u0431\u0435\u0437 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F)" }))] }), (0, jsx_runtime_1.jsx)(Container, { children: (0, jsx_runtime_1.jsxs)(react_leaflet_1.MapContainer, Object.assign({ center: center, zoom: 10, attributionControl: false }, { children: [(0, jsx_runtime_1.jsx)(react_leaflet_1.TileLayer, { attribution: "", url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }), (0, jsx_runtime_1.jsx)(DraggableMarker, { center: center, setCoordinates: setCoordinates })] })) })] }) })));
};
exports.default = MapModal;
//# sourceMappingURL=MapModal.js.map