"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProducts = void 0;
const react_1 = require("react");
const products_context_1 = require("../contexts/products.context");
function useProducts() {
    const context = (0, react_1.useContext)(products_context_1.ProductsContext);
    if (!context) {
        throw new Error(`Missing promotions context`);
    }
    return context;
}
exports.useProducts = useProducts;
//# sourceMappingURL=useProducts.js.map