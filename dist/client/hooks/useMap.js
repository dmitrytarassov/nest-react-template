"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMap = void 0;
const react_1 = require("react");
const map_content_1 = require("../contexts/map.content");
function useMap() {
    const context = (0, react_1.useContext)(map_content_1.MapContext);
    if (!context) {
        throw new Error(`Missing map context`);
    }
    return context;
}
exports.useMap = useMap;
//# sourceMappingURL=useMap.js.map