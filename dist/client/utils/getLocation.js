"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};
async function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            resolve([crd.latitude, crd.longitude]);
        }, reject, options);
    });
}
exports.default = getLocation;
//# sourceMappingURL=getLocation.js.map