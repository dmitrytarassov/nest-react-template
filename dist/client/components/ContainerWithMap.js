"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const dynamic_1 = require("next/dynamic");
const theme_1 = require("../utils/theme");
const router_1 = require("next/router");
const Footer_1 = require("@frontend/components/Footer");
const Header_1 = require("./Header");
const city_provider_1 = require("@frontend/providers/city.provider");
const current_location_provider_1 = require("@frontend/providers/current_location.provider");
const ErrorPage_1 = require("@frontend/components/pages/errors/ErrorPage");
const rentals_provider_1 = require("@frontend/providers/rentals.provider");
const map_provider_1 = require("@frontend/providers/map.provider");
const DynamicComponentWithNoSSR = (0, dynamic_1.default)(() => Promise.resolve().then(() => require('@frontend/components/Map')), { ssr: false });
const Container = styled_components_1.default.div `
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: row-reverse;
  position: relative;
  overflow: hidden;

  ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
      flex-direction: column;
      height: unset;
    `)};
`;
const MapContainer = styled_components_1.default.div `
  width: 40%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  box-sizing: border-box;

  ${({ theme, size }) => (0, styled_components_1.css) `
      ${theme.mixins.halfScreenBreak((0, styled_components_1.css) `
        width: 30%;
      `)}

      ${theme.mixins.tablet((0, styled_components_1.css) `
        width: 100%;

        ${size === 'small' &&
    (0, styled_components_1.css) `
          height: calc(70vh + 72px);
        `}
      `)}
    `}
`;
const ContentContainer = styled_components_1.default.div `
  width: 60%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.background.primary};
  box-shadow: 0 8px 16px rgba(156, 164, 169, 0.32);
  z-index: 2;

  ${({ theme }) => theme.mixins.halfScreenBreak((0, styled_components_1.css) `
      width: 70%;
    `)};

  ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
      width: 100%;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      margin-top: -16px;
      position: relative;
      overflow: visible;
      padding-top: 16px;

      :after {
        content: '';
        height: 8px;
        width: 56px;
        background: #fff;
        left: calc(50% - 28px);
        position: absolute;
        top: -24px;
        border-radius: 4px;
      }
    `)};
`;
const ChildrenContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  padding-top: 72px;
  min-height: calc(100vh - 72px);
  width: 100%;
  justify-content: space-between;

  ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
      padding-top: 0;
    `)};
`;
const ContainerWithMap = (_a) => {
    var { children, statusCode } = _a, rest = __rest(_a, ["children", "statusCode"]);
    const isClient = typeof window !== 'undefined';
    const router = (0, router_1.useRouter)();
    const ref = (0, react_1.useRef)();
    const isSmallMap = [
        '/rentals/[id]',
        '/rentals/[id]/[product]',
        '/promotion/[id]',
        '/rentals',
        '/unique_positions',
    ].includes(router.route);
    const showMap = [
        '/delete_products/[id]',
        '/rentals/[id]',
        '/rentals/[id]/[product]',
        '/promotion/[id]',
        '/unique_positions',
    ].includes(router.route);
    const isError = typeof statusCode !== 'undefined' && statusCode >= 400;
    const city = children.props.city;
    (0, react_1.useEffect)(() => {
        if (showMap) {
            setTimeout(() => {
                window.scrollTo(0, window.innerHeight - 172 - 300);
            }, 500);
        }
        else {
            window.scrollTo(0, 0);
        }
        if (ref) {
            ref.current.scrollTo(0, 0);
        }
    }, [router.route]);
    return ((0, jsx_runtime_1.jsx)(city_provider_1.CityProvider, Object.assign({ currentCity: city || 'spb' }, { children: (0, jsx_runtime_1.jsx)(rentals_provider_1.RentalsProvider, Object.assign({ _rentals: (rest === null || rest === void 0 ? void 0 : rest.rentals) || [] }, { children: (0, jsx_runtime_1.jsx)(map_provider_1.MapProvider, { children: (0, jsx_runtime_1.jsx)(current_location_provider_1.CurrentLocationProvider, { children: (0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(MapContainer, Object.assign({ size: isSmallMap ? 'small' : 'big' }, { children: isClient && (0, jsx_runtime_1.jsx)(DynamicComponentWithNoSSR, {}) })), (0, jsx_runtime_1.jsx)(ContentContainer, Object.assign({ ref: ref }, { children: (0, jsx_runtime_1.jsxs)(ChildrenContainer, { children: [isError ? ((0, jsx_runtime_1.jsx)(rentals_provider_1.RentalsProvider, { children: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, { statusCode: statusCode }) })) : (children), (0, jsx_runtime_1.jsx)(Footer_1.default, { halfScreen: true })] }) }))] }) }) }) })) })));
};
exports.default = ContainerWithMap;
//# sourceMappingURL=ContainerWithMap.js.map