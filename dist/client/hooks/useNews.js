"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNews = void 0;
const news_context_1 = require("../contexts/news.context");
const getContext_1 = require("./getContext");
const react_1 = require("react");
function useNews() {
    const context = (0, react_1.useContext)(news_context_1.NewsContext);
    if (!context) {
        throw new Error(`Missing news context`);
    }
    return context;
}
exports.useNews = useNews;
//# sourceMappingURL=useNews.js.map