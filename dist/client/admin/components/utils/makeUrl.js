"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUrl = void 0;
const transliterate_1 = require("@sindresorhus/transliterate");
const makeUrl = (str) => (0, transliterate_1.default)(str)
    .trim()
    .replace(/[^a-zA-Z\ ]/gm, '')
    .replace(/[\ ]+/gm, '_')
    .toLowerCase();
exports.makeUrl = makeUrl;
//# sourceMappingURL=makeUrl.js.map