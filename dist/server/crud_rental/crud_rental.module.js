"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudRentalModule = void 0;
const common_1 = require("@nestjs/common");
const crud_rental_service_1 = require("./crud_rental.service");
const crud_rental_controller_1 = require("./crud_rental.controller");
const mongoose_1 = require("@nestjs/mongoose");
const crud_rental_schema_1 = require("./crud_rental.schema");
const mongoConfig_1 = require("../utils/mongoConfig");
const api_rental_controller_1 = require("./api_rental.controller");
const api_rental_service_1 = require("./api_rental.service");
let CrudRentalModule = class CrudRentalModule {
};
CrudRentalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(mongoConfig_1.default.uri),
            mongoose_1.MongooseModule.forFeature([{ name: crud_rental_schema_1.Rental.name, schema: crud_rental_schema_1.RentalSchema }]),
        ],
        controllers: [crud_rental_controller_1.CrudRentalController, api_rental_controller_1.ApiRentalController],
        providers: [crud_rental_service_1.CrudRentalService, api_rental_service_1.ApiRentalService],
        exports: [mongoose_1.MongooseModule],
    })
], CrudRentalModule);
exports.CrudRentalModule = CrudRentalModule;
//# sourceMappingURL=crud_rental.module.js.map