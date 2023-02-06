"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const router_1 = require("next/router");
const IBreadCrumb_1 = require("../../../dtos/IBreadCrumb");
const ListTop_1 = require("@frontend/components/ListTop");
const PageMainColumnContainer_1 = require("@frontend/components/PageMainColumnContainer");
const updateMapRentals_1 = require("../../../utils/updateMapRentals");
const ESelectRental_1 = require("../../../dtos/ESelectRental");
const ICrudRental_1 = require("../../../../lib/interfaces/ICrudRental");
const Positions_1 = require("@frontend/components/pages/unique_positions/Positions");
const styled_components_1 = require("styled-components");
const NotFound_1 = require("@frontend/components/NotFound");
const theme_1 = require("../../../utils/theme");
const InfoText_1 = require("@frontend/components/InfoText");
const useMap_1 = require("../../../hooks/useMap");
const UniquePositions_module_scss_1 = require("./UniquePositions.module.scss");
const CarouselContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
const StyledInfoText = (0, styled_components_1.default)(InfoText_1.default) `
  color: #fff;
  max-width: 448px;
  margin-bottom: 0;
  min-height: 145px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  align-items: center;
`;
const UniquePositionsPage = ({ rentals, uniques, }) => {
    const router = (0, router_1.useRouter)();
    const [searchString, setSearchString] = (0, react_1.useState)('');
    const { activeRental } = (0, useMap_1.useMap)();
    const [init, setInit] = (0, react_1.useState)(false);
    const breadcrumbs = [
        {
            name: 'Главная',
            link: '/',
        },
        {
            name: 'Уникальные позиции',
            link: '/unique_positions',
        },
    ];
    (0, react_1.useEffect)(() => {
        setInit(true);
        return () => {
            setInit(false);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        const rental = rentals.find(({ id }) => id === activeRental);
        if (init && rental) {
            console.log(`go to /rentals/${rental.url}`);
            if (rental) {
                router.push(`/rentals/${rental.url}`);
            }
        }
    }, [activeRental]);
    return ((0, jsx_runtime_1.jsxs)(PageMainColumnContainer_1.default, { children: [(0, jsx_runtime_1.jsx)(ListTop_1.default, { breadcrumbs: breadcrumbs, backLink: `/`, title: `Уникальные позиции`, revertColors: true }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: UniquePositions_module_scss_1.default.banner }, { children: [(0, jsx_runtime_1.jsxs)(InfoText_1.default, Object.assign({ onlyDesktop: true, className: UniquePositions_module_scss_1.default.text }, { children: ["\u0412 \u044D\u0442\u043E\u043C \u0431\u043B\u043E\u043A\u0435, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u0440\u0435\u0434\u043A\u0438\u0435, ", '\n', "\u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0435 \u0438 \u0434\u0430\u0436\u0435 \u0442\u0430\u043A\u0438\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438, ", '\n', "\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u044B \u0440\u0430\u043D\u044C\u0448\u0435 \u043D\u0435 \u0432\u0438\u0434\u0435\u043B\u0438!"] })), (0, jsx_runtime_1.jsxs)(InfoText_1.default, Object.assign({ onlyMobile: true, className: UniquePositions_module_scss_1.default.text }, { children: ["\u0412 \u044D\u0442\u043E\u043C \u0431\u043B\u043E\u043A\u0435, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 ", '\n', "\u0440\u0435\u0434\u043A\u0438\u0435, \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0435 \u0438 \u0434\u0430\u0436\u0435 ", '\n', "\u0442\u0430\u043A\u0438\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u044B ", '\n', "\u0440\u0430\u043D\u044C\u0448\u0435 \u043D\u0435 \u0432\u0438\u0434\u0435\u043B\u0438!"] }))] })), (0, jsx_runtime_1.jsx)(CarouselContainer, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "container" }, { children: uniques.length ? (0, jsx_runtime_1.jsx)(Positions_1.default, { positions: uniques }) : (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) })) })] }));
};
exports.default = UniquePositionsPage;
//# sourceMappingURL=UniquePositions.js.map