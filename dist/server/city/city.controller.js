"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityController = void 0;
const common_1 = require("@nestjs/common");
const City_1 = require("../../lib/types/City");
const IControllerResponse_1 = require("../../lib/interfaces/IControllerResponse");
const getCity_1 = require("../../lib/utils/getCity");
const city_service_1 = require("./city.service");
const SessionType_1 = require("../../lib/types/SessionType");
let CityController = class CityController {
    constructor(cityService) {
        this.cityService = cityService;
    }
    getCurrentCity(session) {
        return {
            data: this.cityService.getCity(session),
        };
    }
    setCurrentCity(session, city) {
        session.city = (0, getCity_1.getCity)(city);
        return {
            data: session.city,
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], CityController.prototype, "getCurrentCity", null);
__decorate([
    (0, common_1.Get)('set/:city'),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Param)('city')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Object)
], CityController.prototype, "setCurrentCity", null);
CityController = __decorate([
    (0, common_1.Controller)('api/city'),
    __metadata("design:paramtypes", [city_service_1.CityService])
], CityController);
exports.CityController = CityController;
//# sourceMappingURL=city.controller.js.map