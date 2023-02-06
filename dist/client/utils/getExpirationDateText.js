"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpirationDateText = void 0;
const format_1 = require("date-fns/format");
const ru_1 = require("date-fns/locale/ru");
const getExpirationDateText = (date) => date && `до ${(0, format_1.default)(new Date(date), 'd MMMM', { locale: ru_1.default })}`;
exports.getExpirationDateText = getExpirationDateText;
//# sourceMappingURL=getExpirationDateText.js.map