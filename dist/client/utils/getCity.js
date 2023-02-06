"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCity = void 0;
const City_1 = require("../../lib/types/City");
const getCity = (city) => ['spb', 'moscow'].includes(city) ? city : 'spb';
exports.getCity = getCity;
//# sourceMappingURL=getCity.js.map