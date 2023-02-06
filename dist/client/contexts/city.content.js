"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityContext = void 0;
const react_1 = require("react");
const City_1 = require("../../lib/types/City");
exports.CityContext = (0, react_1.createContext)({
    city: 'spb',
    setCity: () => {
        console.log('setCity do nothing');
    },
});
//# sourceMappingURL=city.content.js.map