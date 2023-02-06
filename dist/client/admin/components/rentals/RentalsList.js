"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const getCityName_1 = require("../../../utils/getCityName");
const react_admin_1 = require("react-admin");
const RentalsList = ({}) => {
    return ((0, jsx_runtime_1.jsx)(react_admin_1.List, { children: (0, jsx_runtime_1.jsxs)(react_admin_1.Datagrid, Object.assign({ rowClick: "edit" }, { children: [(0, jsx_runtime_1.jsx)(react_admin_1.TextField, { source: "name", label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435" }), (0, jsx_runtime_1.jsx)(react_admin_1.FunctionField, { label: "\u0413\u043E\u0440\u043E\u0434", source: "city", render: (record) => (0, getCityName_1.getCityName)(record.city) }), (0, jsx_runtime_1.jsx)(react_admin_1.TextField, { source: "weight", label: "\u0412\u0435\u0441", emptyText: "0" })] })) }));
};
exports.default = RentalsList;
//# sourceMappingURL=RentalsList.js.map