"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContext = void 0;
const react_1 = require("react");
function getContext(_context) {
    const context = (0, react_1.useContext)(_context);
    if (!context) {
        throw new Error(`Missing ${context.constructor.name} context`);
    }
    return context;
}
exports.getContext = getContext;
//# sourceMappingURL=getContext.js.map