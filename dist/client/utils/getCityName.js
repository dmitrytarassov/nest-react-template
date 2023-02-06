"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityName = void 0;
const City_1 = require("../../lib/types/City");
function getCityName(city) {
    return {
        spb: 'Санкт-Петербург',
        moscow: 'Москва',
    }[city];
}
exports.getCityName = getCityName;
//# sourceMappingURL=getCityName.js.map