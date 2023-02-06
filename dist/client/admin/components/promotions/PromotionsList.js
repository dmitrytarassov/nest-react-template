"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_admin_1 = require("react-admin");
const PromotionsList = ({}) => {
    return ((0, jsx_runtime_1.jsx)(react_admin_1.List, { children: (0, jsx_runtime_1.jsxs)(react_admin_1.Datagrid, Object.assign({ rowClick: "edit" }, { children: [(0, jsx_runtime_1.jsx)(react_admin_1.TextField, { source: "name", label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435" }), (0, jsx_runtime_1.jsx)(react_admin_1.TextField, { source: "shortText", label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435" }), (0, jsx_runtime_1.jsx)(react_admin_1.ReferenceField, Object.assign({ label: "\u0420\u0435\u043D\u0442\u0430\u043B", source: "rentalId", reference: "rental" }, { children: (0, jsx_runtime_1.jsx)(react_admin_1.TextField, { source: "name" }) })), (0, jsx_runtime_1.jsx)(react_admin_1.TextField, { source: "weight", label: "\u0412\u0435\u0441", emptyText: "0" }), (0, jsx_runtime_1.jsx)(react_admin_1.BooleanField, { source: "showOnMainPage", label: "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u043E\u0439?" })] })) }));
};
exports.default = PromotionsList;
//# sourceMappingURL=PromotionsList.js.map