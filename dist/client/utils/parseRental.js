"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IRental_1 = require("../../lib/interfaces/IRental");
const ICrudRental_1 = require("../../lib/interfaces/ICrudRental");
const imageUrl_1 = require("./imageUrl");
function parseRental(_rental) {
    const [lat, lan] = _rental.coordinates.split(',');
    const rental = {
        id: _rental.id,
        name: _rental.name,
        email: _rental.email,
        url: _rental.url,
        icon: (0, imageUrl_1.default)(_rental.icon),
        address: {
            name: _rental.address,
            coordinates: [+lat || 0, +lan || 0],
        },
        socials: {
            vk: _rental.vk,
            telegram: _rental.telegram,
            web: _rental.web,
        },
        workingTime: _rental.workingTime,
        rating: _rental.rating,
        phone: +_rental.phone,
        services: [],
        city: _rental.city,
        insurance: _rental.insurance,
        delivery: _rental.delivery,
        selfService: _rental.selfService,
        repair: _rental.repair,
    };
    return rental;
}
exports.default = parseRental;
//# sourceMappingURL=parseRental.js.map