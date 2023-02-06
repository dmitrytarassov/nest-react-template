"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const theme_1 = require("../../../utils/theme");
const classnames_1 = require("classnames");
const Button_1 = require("@frontend/components/Button");
const fetcher_1 = require("../../../utils/fetcher");
const link_1 = require("next/link");
const Form_module_scss_1 = require("./Form.module.scss");
const Container = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  max-width: 604px;
  align-items: flex-start;
  width: 100%;
  position: relative;

  &.sended {
    max-width: 335px;
  }

  .text {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 32px;
    color: #6c768a;
  }

  input,
  textarea {
    background: #ffffff;
    border: 1px solid #d8dde2;
    border-radius: 8px;
    padding: 0 16px;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #6c768a;
    height: 56px;
    width: 448px;
    box-sizing: border-box;

    &.valid {
      border-color: #13ec50;
    }

    &.invalid {
      border-color: #e22446;
    }

    ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
        width: 100%;
      `)}

    ::placeholder {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      color: #6c768a;
    }
  }

  textarea {
    height: 167px;
    margin-top: 24px;
    padding: 16px;
  }

  .checkbox {
    display: flex;
    margin-top: 24px;
    align-items: center;
    cursor: pointer;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;

    a {
      color: #7749d9;
    }

    span {
      width: calc(100% - 32px);
      position: relative;

      &.withBox {
        :before {
          content: '';
          position: absolute;
          left: -39px;
          width: 39px;
          height: 22px;
          top: -2px;
        }
      }
    }

    :before {
      content: '';
      width: 24px;
      height: 24px;
      border: 2px solid #9ea6b6;
      border-radius: 8px;
      margin-right: 16px;
      box-sizing: border-box;
    }

    &.checked:before {
      background: url(/public/checked.svg);
      border: none;
    }
  }

  .result {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: none;

    &.active {
      display: block;
    }

    &.active ~ * {
      opacity: 0;
    }
  }
`;
const StyledButton = (0, styled_components_1.default)(Button_1.default) `
  margin-top: 24px;
  background-color: #f1f5f6;
  color: ${({ theme }) => theme.colors.buttons.insurance.default.color};

  &[data-button-link]:hover {
    background-color: #7749d9 !important;
    color: ${({ theme }) => theme.colors.buttons.insurance.hover.color}!important;
  }

  &[data-button-link]:disabled,
  &[data-button-link]:disabled:hover {
    cursor: default;
    background-color: #f1f5f6 !important;
    color: #aeaeae !important;
  }
`;
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
const Form = ({ onSend, canSend, }) => {
    const [checked, setChecked] = (0, react_1.useState)();
    const [text, settext] = (0, react_1.useState)();
    const [email, setemail] = (0, react_1.useState)();
    const [isValid, setIsValid] = (0, react_1.useState)(false);
    const [sended, setsended] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setIsValid(!!(!sended && checked && validateEmail(email || '') && (text === null || text === void 0 ? void 0 : text.length) > 0));
    }, [email, text, checked, sended]);
    const send = async () => {
        if (isValid) {
            await (0, fetcher_1.post)('/api/feedback/insurance', {
                email,
                message: text,
            });
            setemail('');
            settext('');
            setChecked(false);
            localStorage.setItem('sended', '1');
            setsended(true);
            onSend();
        }
    };
    (0, react_1.useEffect)(() => {
        if (!canSend) {
            setsended(true);
            onSend();
        }
    }, []);
    return ((0, jsx_runtime_1.jsxs)(Container, Object.assign({ className: (0, classnames_1.default)({ sended }) }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)('result', { active: sended }) }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text" }, { children: "\u041C\u044B \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0432\u0430\u0441, \u0437\u0430 \u0432\u0430\u0448\u0443 \u0437\u0430\u044F\u0432\u043A\u0443. \u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0441\u0432\u044F\u0436\u0443\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F" })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text" }, { children: "\u0414\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0433\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443, \u043C\u044B \u0441 \u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0438 \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B" })), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "\u0412\u0430\u0448 E-mail", onChange: (e) => setemail(e.target.value), className: (0, classnames_1.default)({
                    valid: validateEmail(email || ''),
                    invalid: (email || '').length > 0 && !validateEmail(email || ''),
                }) }), (0, jsx_runtime_1.jsx)("textarea", { placeholder: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442", onChange: (e) => settext(e.target.value) }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)('checkbox', { checked }) }, { children: (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "withBox", onClick: () => setChecked(!checked) }, { children: ["\u042F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443", ' '] })), (0, jsx_runtime_1.jsx)(link_1.default, Object.assign({ href: "/terms" }, { children: "\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445" }))] }) })), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ className: Form_module_scss_1.default.button, variant: "grayViolet", disabled: !isValid, onClick: send, size: "large" }, { children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443" }))] })));
};
exports.default = Form;
//# sourceMappingURL=Form.js.map