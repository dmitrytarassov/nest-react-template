"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seo = ({ seo_title, seo_keywords, seo_description, seo_name }) => {
    return {
        title: `Kinoscope${seo_title || seo_name ? ` | ${seo_title || seo_name}` : ''}`,
        keywords: seo_keywords ||
            'Kinoscope, аренда кинообурудования, ренталы на карте, киноренталы',
        description: seo_description ||
            'Kinoscope, аренда кинообурудования, ренталы на карте, киноренталы',
    };
};
exports.default = seo;
//# sourceMappingURL=seo.js.map