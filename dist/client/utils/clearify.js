"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clearify = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map((v) => clearify(v));
    }
    else {
        const keys = Object.keys(obj);
        const newObject = Object.assign({}, obj);
        keys.forEach((key) => {
            if (typeof obj[key] === 'undefined') {
                delete newObject[key];
            }
        });
        return newObject;
    }
};
exports.default = clearify;
//# sourceMappingURL=clearify.js.map