"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUrl = exports.parseVk = exports.parseTelegram = void 0;
const url_1 = require("url");
function parseTelegram(url) {
    const [_, name] = url.split('t.me/');
    return `@${(name || url).toLowerCase()}`;
}
exports.parseTelegram = parseTelegram;
function parseVk(url) {
    const [_, name] = url.split('.com/');
    return `vk.com/${(name || url).toLowerCase()}`;
}
exports.parseVk = parseVk;
function parseUrl(url) {
    try {
        const _url = url_1.default.parse(url);
        return _url.hostname;
    }
    catch (e) {
        return url;
    }
}
exports.parseUrl = parseUrl;
//# sourceMappingURL=socials.js.map