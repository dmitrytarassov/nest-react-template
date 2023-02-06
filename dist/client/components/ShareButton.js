"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const ShareButton_module_scss_1 = require("./ShareButton.module.scss");
const classnames_1 = require("classnames");
const Image_1 = require("@frontend/components/Image");
const ShareButton = ({ alone }) => {
    const ref = (0, react_1.useRef)();
    const popupRef = (0, react_1.useRef)();
    const [open, setOpen] = (0, react_1.useState)(false);
    const [url, setUrl] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        setUrl(typeof window !== 'undefined' ? window.location.href : '');
    }, []);
    const close = (e) => {
        e === null || e === void 0 ? void 0 : e.stopPropagation();
        setOpen(false);
    };
    const copyClick = (e) => {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        navigator.clipboard.writeText(url);
        react_toastify_1.toast.success('🚀 Ссылка скопирована в буфер обмена.', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        close(e);
    };
    (0, react_1.useEffect)(() => {
        document.body.addEventListener('click', (e) => {
            var _a;
            let _target = e.target;
            while (_target) {
                if (ref && ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.isSameNode(_target))) {
                    return;
                }
                _target = _target.parentNode;
            }
            close(e);
        });
    }, []);
    (0, react_1.useEffect)(() => {
        const el = popupRef.current;
        if (el) {
            const position = el.getBoundingClientRect();
            if (position.x < 0) {
                el.style.marginRight = `${position.x - 16}px`;
            }
        }
    }, [open]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(ShareButton_module_scss_1.default.button, { [ShareButton_module_scss_1.default.alone]: alone }), onClick: () => setOpen((open) => !open), ref: ref }, { children: [open && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: ShareButton_module_scss_1.default.popup, onClick: (e) => e.stopPropagation(), ref: popupRef }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: ShareButton_module_scss_1.default.text }, { children: "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: ShareButton_module_scss_1.default.content }, { children: [(0, jsx_runtime_1.jsx)("a", Object.assign({ href: "#", onClick: copyClick }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { width: "32", height: "32", src: "/public/share/copy.svg" }) })), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: `https://vk.com/share.php?url=${url}`, target: "_blank", onClick: close }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { width: "32", height: "32", src: "/public/share/vk.svg" }) })), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: `https://api.whatsapp.com/send?text=${url}`, "data-action": "share/whatsapp/share", target: "_blank", onClick: close }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { width: "32", height: "32", src: "/public/share/whatsapp.svg" }) })), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: `https://t.me/share/url?url=${url}`, target: "_blank", onClick: close }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { width: "32", height: "32", src: "/public/share/telegram.svg" }) }))] }))] }))), (0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "24", height: "25", viewBox: "0 0 24 25", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M16.8004 9.3C18.1259 9.3 19.2004 8.22548 19.2004 6.9C19.2004 5.57452 18.1259 4.5 16.8004 4.5C15.4749 4.5 14.4004 5.57452 14.4004 6.9C14.4004 8.22548 15.4749 9.3 16.8004 9.3Z", stroke: "#0F0E0E", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.20078 14.9001C8.52626 14.9001 9.60078 13.8256 9.60078 12.5001C9.60078 11.1746 8.52626 10.1001 7.20078 10.1001C5.8753 10.1001 4.80078 11.1746 4.80078 12.5001C4.80078 13.8256 5.8753 14.9001 7.20078 14.9001Z", stroke: "#0F0E0E", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M16.8004 20.5002C18.1259 20.5002 19.2004 19.4257 19.2004 18.1002C19.2004 16.7747 18.1259 15.7002 16.8004 15.7002C15.4749 15.7002 14.4004 16.7747 14.4004 18.1002C14.4004 19.4257 15.4749 20.5002 16.8004 20.5002Z", stroke: "#0F0E0E", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.27344 13.708L14.7374 16.892", stroke: "#0F0E0E", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M14.7294 8.10791L9.27344 11.2919", stroke: "#0F0E0E", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: ShareButton_module_scss_1.default.toast }, { children: (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, { position: "bottom-center", autoClose: 5000 }) }))] }));
};
exports.default = ShareButton;
//# sourceMappingURL=ShareButton.js.map