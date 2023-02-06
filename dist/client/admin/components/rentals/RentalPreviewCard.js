"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const theme_1 = require("../../../utils/theme");
const IRental_1 = require("../../../../lib/interfaces/IRental");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const PreviewContainer_1 = require("../previews/PreviewContainer");
const ICrudRental_1 = require("../../../../lib/interfaces/ICrudRental");
function RentalPreviewCard() {
    const [record, setRecord] = (0, react_1.useState)({
        id: '',
        weight: 0,
        name: '',
        url: '',
        icon: '',
        address: '',
        coordinates: '',
        workingTime: '',
        rating: 9,
        phone: '79998887766',
        city: 'spb',
    });
    const update = () => {
    };
    (0, react_1.useEffect)(() => {
        const id = setInterval(update, 3000);
        setTimeout(update, 100);
        return () => {
            clearInterval(id);
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, Object.assign({ theme: theme_1.theme }, { children: (0, jsx_runtime_1.jsx)(PreviewContainer_1.default, { children: (0, jsx_runtime_1.jsx)(PreviewContainer_1.PreviewPageContainer, {}) }) })));
}
exports.default = RentalPreviewCard;
//# sourceMappingURL=RentalPreviewCard.js.map