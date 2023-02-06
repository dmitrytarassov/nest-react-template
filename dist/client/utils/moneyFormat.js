"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moneyFormat = void 0;
const formatter = new Intl.NumberFormat('ru-RU');
const moneyFormat = (n, addSymbol = true) => `${formatter.format(n)}${addSymbol ? ' ₽' : ''}`;
exports.moneyFormat = moneyFormat;
//# sourceMappingURL=moneyFormat.js.map