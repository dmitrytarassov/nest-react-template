"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMapRentals = void 0;
const IRental_1 = require("../../lib/interfaces/IRental");
const ESetMarkers_1 = require("../dtos/ESetMarkers");
const ICrudRental_1 = require("../../lib/interfaces/ICrudRental");
function updateMapRentals(rentals, active, timeout = 200) {
    const detail = rentals.map(({ coordinates, id: rentalId, icon }) => ({
        coordinates: coordinates.split(',').map((a) => +a),
        rentalId,
        active: rentalId === active,
        icon,
    }));
    setTimeout(() => {
        window.dispatchEvent(new CustomEvent(ESetMarkers_1.ESetMarkers, { detail }));
    }, timeout);
}
exports.updateMapRentals = updateMapRentals;
//# sourceMappingURL=updateMapRentals.js.map