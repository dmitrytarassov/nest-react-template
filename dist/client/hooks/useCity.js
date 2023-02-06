"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCity = void 0;
const react_1 = require("react");
const city_content_1 = require("../contexts/city.content");
function useCity() {
    const context = (0, react_1.useContext)(city_content_1.CityContext);
    if (!context) {
        throw new Error(`Missing news context`);
    }
    return context;
}
exports.useCity = useCity;
//# sourceMappingURL=useCity.js.map