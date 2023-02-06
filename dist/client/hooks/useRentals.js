"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRentals = void 0;
const react_1 = require("react");
const rentals_context_1 = require("../contexts/rentals.context");
function useRentals() {
    const context = (0, react_1.useContext)(rentals_context_1.RentalsContext);
    if (!context) {
        throw new Error(`Missing promotions context`);
    }
    return context;
}
exports.useRentals = useRentals;
//# sourceMappingURL=useRentals.js.map