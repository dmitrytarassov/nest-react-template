"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapContext = void 0;
const react_1 = require("react");
const City_1 = require("../../lib/types/City");
const IMarker_1 = require("../dtos/IMarker");
exports.MapContext = (0, react_1.createContext)({
    markers: [],
    selectRental: () => {
        console.log('selectRental do nothing');
    },
    zoom: 14,
    activeRental: '',
});
//# sourceMappingURL=map.content.js.map