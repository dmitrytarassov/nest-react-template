"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const mongoConfig = {
    uri: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
};
exports.default = mongoConfig;
//# sourceMappingURL=mongoConfig.js.map