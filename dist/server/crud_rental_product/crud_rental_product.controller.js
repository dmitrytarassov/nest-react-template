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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudRentalProductController = void 0;
const common_1 = require("@nestjs/common");
const crud_rental_product_service_1 = require("./crud_rental_product.service");
const BaseCrudMongoController_1 = require("../utils/BaseCrudMongoController");
let CrudRentalProductController = class CrudRentalProductController extends BaseCrudMongoController_1.BaseCrudMongoController {
    constructor(service) {
        super(service);
        this.service = service;
    }
};
CrudRentalProductController = __decorate([
    (0, common_1.Controller)('crud/rental_products'),
    __metadata("design:paramtypes", [crud_rental_product_service_1.CrudRentalProductService])
], CrudRentalProductController);
exports.CrudRentalProductController = CrudRentalProductController;
//# sourceMappingURL=crud_rental_product.controller.js.map