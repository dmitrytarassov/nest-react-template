"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudPromotionModule = void 0;
const common_1 = require("@nestjs/common");
const crud_promotion_service_1 = require("./crud_promotion.service");
const crud_promotion_controller_1 = require("./crud_promotion.controller");
const mongoose_1 = require("@nestjs/mongoose");
const crud_promotion_schema_1 = require("./crud_promotion.schema");
const mongoConfig_1 = require("../utils/mongoConfig");
const api_promotion_service_1 = require("./api_promotion.service");
const api_promotion_controller_1 = require("./api_promotion.controller");
let CrudPromotionModule = class CrudPromotionModule {
};
CrudPromotionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(mongoConfig_1.default.uri),
            mongoose_1.MongooseModule.forFeature([
                { name: crud_promotion_schema_1.Promotion.name, schema: crud_promotion_schema_1.PromotionSchema },
            ]),
        ],
        controllers: [crud_promotion_controller_1.CrudPromotionController, api_promotion_controller_1.ApiPromotionController],
        providers: [crud_promotion_service_1.CrudPromotionService, api_promotion_service_1.ApiPromotionService],
        exports: [mongoose_1.MongooseModule],
    })
], CrudPromotionModule);
exports.CrudPromotionModule = CrudPromotionModule;
//# sourceMappingURL=crud_product.module.js.map