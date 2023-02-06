"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_admin_1 = require("react-admin");
const ProductsList = ({}) => {
    return ((0, jsx_runtime_1.jsx)(react_admin_1.List, { children: (0, jsx_runtime_1.jsxs)(react_admin_1.Datagrid, Object.assign({ rowClick: "edit" }, { children: [(0, jsx_runtime_1.jsx)(react_admin_1.TextField, { source: "name" }), (0, jsx_runtime_1.jsx)(react_admin_1.BooleanField, { source: "unique" })] })) }));
};
exports.default = ProductsList;
//# sourceMappingURL=ProductsList.js.map