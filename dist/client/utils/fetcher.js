"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = void 0;
const get = (url) => fetch(url).then((r) => r.json());
exports.get = get;
const post = (url, data) => fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
    },
}).then((r) => r.json());
exports.post = post;
//# sourceMappingURL=fetcher.js.map