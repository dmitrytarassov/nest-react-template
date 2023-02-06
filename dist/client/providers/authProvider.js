"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authProvider = {
    login: ({ login, password }) => {
    },
    checkError: (error) => Promise.resolve(),
    checkAuth: (params) => Promise.resolve(),
    logout: () => Promise.resolve(),
    getIdentity: () => Promise.resolve(),
    getPermissions: () => Promise.resolve(),
};
exports.default = authProvider;
//# sourceMappingURL=authProvider.js.map