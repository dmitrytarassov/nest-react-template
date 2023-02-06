"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const products_context_1 = require("../contexts/products.context");
const IProduct_1 = require("../../lib/interfaces/IProduct");
const ProductsProvider = ({ children, }) => {
    const [products, setProducts] = (0, react_1.useState)([]);
    const [productIds, setProductIds] = (0, react_1.useState)();
    const addIds = (ids) => {
        setProductIds((_ids) => [...new Set([...ids, ..._ids])]);
    };
    return ((0, jsx_runtime_1.jsx)(products_context_1.ProductsContext.Provider, Object.assign({ value: { products, addIds } }, { children: children })));
};
exports.ProductsProvider = ProductsProvider;
//# sourceMappingURL=products.provider.js.map