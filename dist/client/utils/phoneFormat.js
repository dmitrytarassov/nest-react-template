"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneFormat = void 0;
const parsePhoneNumber = require("libphonenumber-js");
const phoneFormat = (phone) => parsePhoneNumber.parsePhoneNumber(phone).formatInternational();
exports.phoneFormat = phoneFormat;
//# sourceMappingURL=phoneFormat.js.map