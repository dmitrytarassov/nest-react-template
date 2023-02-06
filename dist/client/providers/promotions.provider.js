"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionsProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ICrudPromotion_1 = require("../../lib/interfaces/ICrudPromotion");
const promotions_context_1 = require("../contexts/promotions.context");
const loaders_1 = require("../utils/loaders");
const useCity_1 = require("../hooks/useCity");
const PromotionsProvider = ({ children, _promotions = [], }) => {
    const { city } = (0, useCity_1.useCity)();
    const [promotions, setPromotions] = (0, react_1.useState)(_promotions);
    const [init, setInit] = (0, react_1.useState)();
    const load = async () => {
        const data = await (0, loaders_1.loadAllPromotions)(city, true);
        setPromotions(data);
        setInit(true);
    };
    (0, react_1.useEffect)(() => {
        if (init) {
            load();
        }
    }, [city]);
    (0, react_1.useEffect)(() => {
        if (!_promotions.length) {
            load();
        }
        else {
            setInit(true);
        }
    }, []);
    return ((0, jsx_runtime_1.jsx)(promotions_context_1.PromotionsContext.Provider, Object.assign({ value: { promotions } }, { children: children })));
};
exports.PromotionsProvider = PromotionsProvider;
//# sourceMappingURL=promotions.provider.js.map