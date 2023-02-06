"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudProductModule = void 0;
const common_1 = require("@nestjs/common");
const crud_product_service_1 = require("./crud_product.service");
const crud_product_controller_1 = require("./crud_product.controller");
const mongoose_1 = require("@nestjs/mongoose");
const crud_product_schema_1 = require("./crud_product.schema");
const mongoConfig_1 = require("../utils/mongoConfig");
const api_product_service_1 = require("./api_product.service");
const api_product_controller_1 = require("./api_product.controller");
let CrudProductModule = class CrudProductModule {
};
CrudProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(mongoConfig_1.default.uri),
            mongoose_1.MongooseModule.forFeature([{ name: crud_product_schema_1.Product.name, schema: crud_product_schema_1.ProductSchema }]),
        ],
        controllers: [crud_product_controller_1.CrudProductController, api_product_controller_1.ApiProductController],
        providers: [crud_product_service_1.CrudProductService, api_product_service_1.ApiProductService],
        exports: [mongoose_1.MongooseModule],
    })
], CrudProductModule);
exports.CrudProductModule = CrudProductModule;
//# sourceMappingURL=crud_product.module.js.map