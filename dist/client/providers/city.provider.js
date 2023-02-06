"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const city_content_1 = require("../contexts/city.content");
const City_1 = require("../../lib/types/City");
const fetcher_1 = require("../utils/fetcher");
const updateMapRentals_1 = require("../utils/updateMapRentals");
const CityProvider = ({ children, currentCity, }) => {
    const [city, setCity] = (0, react_1.useState)(currentCity);
    const updateCity = async (city) => {
        const response = await (0, fetcher_1.get)(`/api/city/set/${city}`);
        if (response === null || response === void 0 ? void 0 : response.data) {
            (0, updateMapRentals_1.updateMapRentals)([], '', 0);
            setTimeout(() => {
                setCity(response === null || response === void 0 ? void 0 : response.data);
            }, 300);
        }
    };
    return ((0, jsx_runtime_1.jsx)(city_content_1.CityContext.Provider, Object.assign({ value: { city, setCity: updateCity } }, { children: children })));
};
exports.CityProvider = CityProvider;
//# sourceMappingURL=city.provider.js.map