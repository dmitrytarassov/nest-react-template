"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentLocationProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const current_location_context_1 = require("../contexts/current_location.context");
const CurrentLocationProvider = ({ children, }) => {
    const [coordinates, setCoordinates] = (0, react_1.useState)();
    return ((0, jsx_runtime_1.jsx)(current_location_context_1.CurrentLocationContext.Provider, Object.assign({ value: { coordinates, setCoordinates } }, { children: children })));
};
exports.CurrentLocationProvider = CurrentLocationProvider;
//# sourceMappingURL=current_location.provider.js.map