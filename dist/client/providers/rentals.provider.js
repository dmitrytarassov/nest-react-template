"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalsProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const rentals_context_1 = require("../contexts/rentals.context");
const swr_1 = require("swr");
const fetcher_1 = require("../utils/fetcher");
const IControllerResponse_1 = require("../../lib/interfaces/IControllerResponse");
const useCity_1 = require("../hooks/useCity");
const ICrudRental_1 = require("../../lib/interfaces/ICrudRental");
const RentalsProvider = ({ children, _rentals = [], }) => {
    var _a;
    const [init, setInit] = (0, react_1.useState)(false);
    const { city } = (0, useCity_1.useCity)();
    const fetchData = (0, swr_1.default)(`/api/rental?filter[]=city,${city}&sort[0]=weight,desc`, fetcher_1.get);
    (0, react_1.useEffect)(() => {
        if (init) {
            fetchData.mutate();
        }
    }, [city]);
    (0, react_1.useEffect)(() => {
        setInit(true);
    }, []);
    const rentals = ((_a = fetchData === null || fetchData === void 0 ? void 0 : fetchData.data) === null || _a === void 0 ? void 0 : _a.data) || _rentals || [];
    return ((0, jsx_runtime_1.jsx)(rentals_context_1.RentalsContext.Provider, Object.assign({ value: { rentals } }, { children: children })));
};
exports.RentalsProvider = RentalsProvider;
//# sourceMappingURL=rentals.provider.js.map