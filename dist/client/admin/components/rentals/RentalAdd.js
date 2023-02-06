"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_admin_1 = require("react-admin");
const MapModal_1 = require("@admin/components/MapModal");
const RentalBase_1 = require("./RentalBase");
const RentalAdd = (props) => {
    const [mapIsOpen, setMapIsOpen] = (0, react_1.useState)(false);
    const [city, setCity] = (0, react_1.useState)('spb');
    const [coordinates, setCoordinates] = (0, react_1.useState)([0, 0]);
    const applyCoordinates = (coords) => {
        setCoordinates(coords);
        setMapIsOpen(false);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(MapModal_1.default, { open: mapIsOpen, city: city, onClose: applyCoordinates }), (0, jsx_runtime_1.jsx)(react_admin_1.Create, Object.assign({}, props, { redirect: "edit" }, { children: (0, jsx_runtime_1.jsx)(RentalBase_1.default, { setMapIsOpen: setMapIsOpen, coordinates: coordinates, setCity: setCity }) }))] }));
};
exports.default = RentalAdd;
//# sourceMappingURL=RentalAdd.js.map