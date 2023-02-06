"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCurrentLocation = void 0;
const react_1 = require("react");
const current_location_context_1 = require("../contexts/current_location.context");
function useCurrentLocation() {
    const context = (0, react_1.useContext)(current_location_context_1.CurrentLocationContext);
    if (!context) {
        throw new Error(`Missing current location context`);
    }
    return context;
}
exports.useCurrentLocation = useCurrentLocation;
//# sourceMappingURL=useCurrentLocation.js.map