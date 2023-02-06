"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const City_1 = require("../../lib/types/City");
const SessionType_1 = require("../../lib/types/SessionType");
const getCity_1 = require("../../lib/utils/getCity");
let CityService = class CityService {
    getCity(session) {
        return (0, getCity_1.getCity)(session.city);
    }
};
CityService = __decorate([
    (0, common_1.Injectable)()
], CityService);
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map