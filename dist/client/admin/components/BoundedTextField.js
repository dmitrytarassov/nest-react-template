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
exports.BoundedTextField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_admin_1 = require("react-admin");
const react_1 = require("react");
const BoundedTextField = (props) => {
    const { onChange, onBlur, refValue } = props, rest = __rest(props, ["onChange", "onBlur", "refValue"]);
    const { field, fieldState: { isTouched, invalid, error }, formState: { isSubmitted }, isRequired, } = (0, react_admin_1.useInput)(Object.assign({ onChange,
        onBlur }, props));
    (0, react_1.useEffect)(() => {
        field.onChange(refValue);
    }, [refValue]);
    return ((0, jsx_runtime_1.jsx)(react_admin_1.TextInput, Object.assign({}, field, { label: props.label, error: (isTouched || isSubmitted) && invalid, helperText: (isTouched || isSubmitted) && invalid ? error : '', required: isRequired }, rest)));
};
exports.BoundedTextField = BoundedTextField;
//# sourceMappingURL=BoundedTextField.js.map