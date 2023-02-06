"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const Tabs_1 = require("./components/Tabs");
const Subtitle_1 = require("@frontend/components/pages/insurance/components/Subtitle");
const theme_1 = require("../../../utils/theme");
const Text_1 = require("@frontend/components/pages/insurance/components/Text");
const imageUrl_1 = require("../../../utils/imageUrl");
const Container = styled_components_1.default.div `
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  .container {
    margin-top: 24px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;
    width: 100%;

    ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        row-gap: 16px;
      `)}

    ${Subtitle_1.default} {
      margin-bottom: 16px;
    }
  }

  .block {
    background: #f1f5f6;
    border-radius: 24px;
    padding: 24px;
    position: relative;

    ${Subtitle_1.default} {
      //width: calc(100% - 60px);
    }

    .image {
      position: absolute;
      right: 24px;
      top: 24px;
      width: 48px;
      height: 48px;
      display: none;
    }
  }
`;
const WhyUs = () => {
    const [tab, settab] = (0, react_1.useState)('rentals');
    return ((0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsx)(Tabs_1.default, { options: [
                    { name: 'Ренталам', value: 'rentals' },
                    { name: 'Клиентам', value: 'clients' },
                ], active: tab, onChange: settab }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "container" }, { children: tab === 'rentals' ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: (0, imageUrl_1.default)('ins-1.svg'), alt: "", className: "image" }), (0, jsx_runtime_1.jsxs)(Subtitle_1.default, { children: ["\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u043C ", '\n', "\u0432\u0430\u0448\u0438 \u0434\u0435\u043D\u044C\u0433\u0438"] }), (0, jsx_runtime_1.jsx)(Text_1.default, { children: "\u0417\u0430\u043F\u043B\u0430\u0442\u0438\u043C \u0437\u0430 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u043D\u0443\u044E \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C \u0442\u0435\u0445\u043D\u0438\u043A\u0443 \u0432 \u043A\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0438\u0439 \u0441\u0440\u043E\u043A" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: (0, imageUrl_1.default)('ins-2.svg'), alt: "", className: "image" }), (0, jsx_runtime_1.jsxs)(Subtitle_1.default, { children: ["\u0413\u043E\u0432\u043E\u0440\u0438\u043C \u043D\u0430 \u043E\u0434\u043D\u043E\u043C ", '\n', "\u044F\u0437\u044B\u043A\u0435 \u0441 \u0432\u0430\u043C\u0438"] }), (0, jsx_runtime_1.jsx)(Text_1.default, { children: "\u041F\u043E\u043D\u0438\u043C\u0430\u0435\u043C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0430\u0440\u0435\u043D\u0434\u044B \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: (0, imageUrl_1.default)('ins-3.svg'), alt: "", className: "image" }), (0, jsx_runtime_1.jsxs)(Subtitle_1.default, { children: ["\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u043C ", '\n', "\u0432\u0430\u0448\u0435 \u0432\u0440\u0435\u043C\u044F"] }), (0, jsx_runtime_1.jsx)(Text_1.default, { children: "\u041F\u043E\u0434\u0431\u0435\u0440\u0435\u043C \u0434\u043B\u044F \u0432\u0430\u0441 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0438 \u043E\u0444\u043E\u0440\u043C\u0438\u043C \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D" })] }))] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: (0, imageUrl_1.default)('ins-4.svg'), alt: "", className: "image" }), (0, jsx_runtime_1.jsxs)(Subtitle_1.default, { children: ["\u0423 \u043D\u0430\u0441 \u0434\u0435\u0448\u0435\u0432\u043B\u0435 ", '\n', "\u0447\u0435\u043C \u0443 \u0434\u0440\u0443\u0433\u0438\u0445"] }), (0, jsx_runtime_1.jsx)(Text_1.default, { children: "\u041D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043C\u044B \u044F\u0432\u043B\u044F\u0435\u043C\u0441\u044F \u0441\u0430\u043C\u044B\u043C \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u043C \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u044B\u043C \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u043C \u043D\u0430 \u0440\u044B\u043D\u043A\u0435" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: (0, imageUrl_1.default)('ins-5.svg'), alt: "", className: "image" }), (0, jsx_runtime_1.jsxs)(Subtitle_1.default, { children: ["\u0422\u043E\u043B\u044C\u043A\u043E \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0438\u0441\u043A\u0438 ", '\n', "\u043D\u0430 \u0441\u044A\u0435\u043C\u043A\u0435"] }), (0, jsx_runtime_1.jsx)(Text_1.default, { children: "\u0423\u0440\u043E\u043D\u0438\u043B \u043E\u0431\u044A\u0435\u043A\u0442\u0438\u0432 \u0438\u043B\u0438 \u043F\u043E\u0432\u0440\u0435\u0434\u0438\u043B \u043A\u0430\u043C\u0435\u0440\u0443 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0441\u044A\u0435\u043C\u043A\u0438? \u0422\u0435\u043F\u0435\u0440\u044C \u044D\u0442\u043E \u0442\u043E\u0436\u0435 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u044B\u0435 \u0441\u043B\u0443\u0447\u0430\u0438" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: (0, imageUrl_1.default)('ins-6.svg'), alt: "", className: "image" }), (0, jsx_runtime_1.jsxs)(Subtitle_1.default, { children: ["\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F ", '\n', "\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u044F"] }), (0, jsx_runtime_1.jsx)(Text_1.default, { children: "\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0437\u0430 \u00AB\u0443\u0434\u0430\u0440 \u043C\u043E\u043B\u043D\u0438\u0438\u00BB \u0438\u043B\u0438 \u00AB\u043F\u043E\u0445\u0438\u0449\u0435\u043D\u0438\u0435 \u0438\u043D\u043E\u043F\u043B\u0430\u043D\u0435\u0442\u044F\u043D\u0430\u043C\u0438\u00BB" })] }))] })) }))] }));
};
exports.default = WhyUs;
//# sourceMappingURL=WhyUs.js.map