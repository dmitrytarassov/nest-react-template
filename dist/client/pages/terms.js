"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const getCity_1 = require("../utils/getCity");
const city_provider_1 = require("@frontend/providers/city.provider");
const Header_1 = require("@frontend/components/Header");
const Footer_1 = require("@frontend/components/Footer");
const Terms_1 = require("@frontend/components/pages/Terms/Terms");
const Terms = ({ city }) => {
    return ((0, jsx_runtime_1.jsxs)(city_provider_1.CityProvider, Object.assign({ currentCity: city }, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(Terms_1.default, {}), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] })));
};
exports.default = Terms;
async function getServerSideProps(context) {
    return {
        props: {
            city: (0, getCity_1.getCity)(context.req.session.city),
        },
    };
}
exports.getServerSideProps = getServerSideProps;
//# sourceMappingURL=terms.js.map