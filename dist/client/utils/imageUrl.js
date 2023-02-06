"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imageUrl = (u) => u
    ? u.startsWith('/public')
        ? u
        : `/public/${u}`
    : '/public/logoWithCover.svg';
exports.default = imageUrl;
//# sourceMappingURL=imageUrl.js.map