"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = require("@frontend/components/Button");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const theme_1 = require("../../../utils/theme");
const useRentals_1 = require("../../../hooks/useRentals");
const router_1 = require("next/router");
const useMap_1 = require("../../../hooks/useMap");
const Container = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: calc(100vh - 72px - 275px);
  width: 100%;
`;
const Text = styled_components_1.default.div `
  margin-bottom: 56px;
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 64px;
  white-space: break-spaces;
  text-align: center;
  padding: 0 32px;

  ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
      margin: 64px 0 32px;
    `)};
`;
const Image = styled_components_1.default.img `
  width: 100%;
  margin-top: 32px;
  margin-bottom: -32px;

  ${({ theme }) => theme.mixins.mobile((0, styled_components_1.css) `
      height: 250px;
      object-fit: cover;
    `)};
`;
const images = {
    500: '/publc/500.svg',
    400: '/publc/400.svg',
};
function ErrorPage({ statusCode }) {
    const router = (0, router_1.useRouter)();
    const { rentals } = (0, useRentals_1.useRentals)();
    const { activeRental } = (0, useMap_1.useMap)();
    const [init, setInit] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setInit(true);
        return () => {
            setInit(false);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        if (activeRental && init) {
            const rental = rentals.find(({ id }) => id === activeRental);
            if (rental) {
                router.push(`/rentals/${rental.url}`);
            }
        }
    }, [activeRental]);
    const code = statusCode < 500 ? 400 : 500;
    const text = code === 500
        ? 'Ой, кажется что-то сломалось,\nскоро мы все починим!'
        : 'Опа! А страница-то не найдена!';
    return ((0, jsx_runtime_1.jsxs)(Container, Object.assign({ image: images[code] || images[500] }, { children: [(0, jsx_runtime_1.jsx)(Text, { children: text }), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ type: "link", href: "/" }, { children: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E" })), (0, jsx_runtime_1.jsx)(Image, { src: images[code] || images[500] })] })));
}
exports.default = ErrorPage;
//# sourceMappingURL=ErrorPage.js.map