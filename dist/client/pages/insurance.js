"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const InsurancePage_1 = require("@frontend/components/pages/insurance/InsurancePage");
const getCity_1 = require("../utils/getCity");
const city_provider_1 = require("@frontend/providers/city.provider");
const Header_1 = require("@frontend/components/Header");
const Footer_1 = require("@frontend/components/Footer");
const Insurance = ({ city, canSend }) => {
    return ((0, jsx_runtime_1.jsxs)(city_provider_1.CityProvider, Object.assign({ currentCity: city }, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(InsurancePage_1.default, { canSend: canSend }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] })));
};
exports.default = Insurance;
async function getServerSideProps(context) {
    const lastSend = context.req.session.insuranceRequestSend
        ? new Date(context.req.session.insuranceRequestSend)
        : new Date(+new Date() - 10000001);
    const goodTimeToSend = +new Date() - +lastSend >= 10000000;
    return {
        props: {
            city: (0, getCity_1.getCity)(context.req.session.city),
            canSend: goodTimeToSend,
        },
    };
}
exports.getServerSideProps = getServerSideProps;
//# sourceMappingURL=insurance.js.map