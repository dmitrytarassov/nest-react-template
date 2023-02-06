"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const view_module_1 = require("../view/view.module");
const nestjs_console_1 = require("nestjs-console");
const city_module_1 = require("../city/city.module");
const city_controller_1 = require("../city/city.controller");
const city_service_1 = require("../city/city.service");
const serve_static_1 = require("@nestjs/serve-static");
const path = require("path");
const crud_rental_module_1 = require("../crud_rental/crud_rental.module");
const crud_rental_controller_1 = require("../crud_rental/crud_rental.controller");
const crud_rental_service_1 = require("../crud_rental/crud_rental.service");
const mongoose_1 = require("@nestjs/mongoose");
const crud_product_service_1 = require("../crud_product/crud_product.service");
const crud_product_controller_1 = require("../crud_product/crud_product.controller");
const crud_product_module_1 = require("../crud_product/crud_product.module");
const crud_rental_product_module_1 = require("../crud_rental_product/crud_rental_product.module");
const crud_rental_product_controller_1 = require("../crud_rental_product/crud_rental_product.controller");
const crud_rental_product_service_1 = require("../crud_rental_product/crud_rental_product.service");
const crud_product_module_2 = require("../crud_promotion/crud_product.module");
const crud_promotion_controller_1 = require("../crud_promotion/crud_promotion.controller");
const crud_promotion_service_1 = require("../crud_promotion/crud_promotion.service");
const crud_auth_service_1 = require("../crud_auth/crud_auth.service");
const crud_auth_module_1 = require("../crud_auth/crud_auth.module");
const crud_auth_controller_1 = require("../crud_auth/crud_auth.controller");
const api_rental_product_service_1 = require("../crud_rental_product/api_rental_product.service");
const api_rental_product_controller_1 = require("../crud_rental_product/api_rental_product.controller");
const api_product_controller_1 = require("../crud_product/api_product.controller");
const api_product_service_1 = require("../crud_product/api_product.service");
const api_promotion_service_1 = require("../crud_promotion/api_promotion.service");
const api_rental_controller_1 = require("../crud_rental/api_rental.controller");
const api_promotion_controller_1 = require("../crud_promotion/api_promotion.controller");
const api_rental_service_1 = require("../crud_rental/api_rental.service");
const mongoConfig_1 = require("../utils/mongoConfig");
const feedback_module_1 = require("../feedback/feedback.module");
const feedback_controller_1 = require("../feedback/feedback.controller");
const feedback_service_1 = require("../feedback/feedback.service");
console.log(mongoConfig_1.default);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(mongoConfig_1.default.uri),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.join(__dirname, '..', 'public'),
            }),
            view_module_1.ViewModule,
            nestjs_console_1.ConsoleModule,
            crud_rental_module_1.CrudRentalModule,
            crud_product_module_1.CrudProductModule,
            crud_rental_product_module_1.CrudRentalProductModule,
            crud_product_module_2.CrudPromotionModule,
            city_module_1.CityModule,
            crud_auth_module_1.CrudAuthModule,
            feedback_module_1.FeedbackModule,
        ],
        controllers: [
            app_controller_1.AppController,
            crud_rental_controller_1.CrudRentalController,
            crud_product_controller_1.CrudProductController,
            crud_rental_product_controller_1.CrudRentalProductController,
            crud_promotion_controller_1.CrudPromotionController,
            city_controller_1.CityController,
            crud_auth_controller_1.CrudAuthController,
            api_rental_product_controller_1.ApiRentalProductController,
            api_product_controller_1.ApiProductController,
            api_promotion_controller_1.ApiPromotionController,
            api_rental_controller_1.ApiRentalController,
            feedback_controller_1.FeedbackController,
        ],
        providers: [
            app_service_1.AppService,
            crud_rental_service_1.CrudRentalService,
            crud_product_service_1.CrudProductService,
            crud_rental_product_service_1.CrudRentalProductService,
            crud_promotion_service_1.CrudPromotionService,
            city_service_1.CityService,
            crud_auth_service_1.CrudAuthService,
            api_rental_product_service_1.ApiRentalProductService,
            api_product_service_1.ApiProductService,
            api_promotion_service_1.ApiPromotionService,
            api_rental_service_1.ApiRentalService,
            feedback_service_1.FeedbackService,
        ],
        exports: [mongoose_1.MongooseModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map