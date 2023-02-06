"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const Service_1 = require("@frontend/components/pages/rental/Service");
const StyledServices = styled_components_1.default.div `
  display: block;
  margin-top: -12px;
`;
const Services = ({ services }) => {
    return ((0, jsx_runtime_1.jsx)(StyledServices, { children: services.map((service) => ((0, jsx_runtime_1.jsx)(Service_1.default, { children: service }, service))) }));
};
exports.default = Services;
//# sourceMappingURL=Services.js.map