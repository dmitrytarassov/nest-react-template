"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePromotions = void 0;
const react_1 = require("react");
const promotions_context_1 = require("../contexts/promotions.context");
function usePromotions() {
    const context = (0, react_1.useContext)(promotions_context_1.PromotionsContext);
    if (!context) {
        throw new Error(`Missing promotions context`);
    }
    return context;
}
exports.usePromotions = usePromotions;
//# sourceMappingURL=usePromotions.js.map