"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const theme_1 = require("../../../utils/theme");
const Container = styled_components_1.default.div `
  display: flex;
  flex-direction: column;

  table {
    border-radius: 16px;
    border-spacing: 0;
    margin-bottom: 32px;

    ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
        margin-bottom: 24px;
      `)}

    td,
    th {
      width: 33%;
      border-collapse: collapse;
      border: 1px solid #eaeaea;
      padding: 12px 24px;
      text-align: left;

      ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
          padding: 10px 12px;
        `)}
    }
    th {
      background: #f1f5f6;
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.5px;

      ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
          font-size: 10px;
          line-height: 14px;
        `)}
    }

    td {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 135%;
      color: #0f0e0e;

      ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
          font-size: 10px;
          line-height: 14px;
        `)}
    }

    th:first-child {
      border-top-left-radius: 16px;
    }

    th:last-child {
      border-top-right-radius: 16px;
    }

    tbody {
      tr:last-child {
        td:first-child {
          border-bottom-left-radius: 16px;
        }

        td:last-child {
          border-bottom-right-radius: 16px;
        }
      }
    }
  }
  .disclaimer {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #9ea6b6;
  }
`;
const Prices = () => {
    return ((0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "\u041E\u0446\u0435\u043D\u043E\u0447\u043D\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0438" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0421\u0440\u043E\u043A \u0430\u0440\u0435\u043D\u0434\u044B" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("td", { children: ["\u043E\u0442", '\u00A0', "100.000 \u0434\u043E", '\u00A0', "300.000", '\u00A0', "\u20BD"] }), (0, jsx_runtime_1.jsx)("td", { children: "\u043E\u0442 135 \u20BD" }), (0, jsx_runtime_1.jsx)("td", { children: "\u0434\u043E 7 \u0434\u043D\u0435\u0439" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("td", { children: ["\u043E\u0442", '\u00A0', "300.000 \u0434\u043E", '\u00A0', "500.000", '\u00A0', "\u20BD"] }), (0, jsx_runtime_1.jsx)("td", { children: "\u043E\u0442 540 \u20BD" }), (0, jsx_runtime_1.jsx)("td", { children: "\u0434\u043E 7 \u0434\u043D\u0435\u0439" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("td", { children: ["\u043E\u0442", '\u00A0', "500.000 \u0434\u043E", '\u00A0', "1", '\u00A0', "\u043C\u043B\u043D.", '\u00A0', "\u20BD"] }), (0, jsx_runtime_1.jsx)("td", { children: "\u043E\u0442 1035 \u20BD" }), (0, jsx_runtime_1.jsx)("td", { children: "\u0434\u043E 7 \u0434\u043D\u0435\u0439" })] })] })] }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "disclaimer" }, { children: "*\u041E\u043A\u043E\u043D\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u043F\u0440\u0435\u043C\u0438\u0438 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0430\u0440\u0435\u043D\u0434\u044B" }))] }));
};
exports.default = Prices;
//# sourceMappingURL=Prices.js.map