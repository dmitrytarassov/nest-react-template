"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudAuthModule = void 0;
const common_1 = require("@nestjs/common");
const crud_auth_service_1 = require("./crud_auth.service");
const crud_auth_controller_1 = require("./crud_auth.controller");
const mongoose_1 = require("@nestjs/mongoose");
const crud_auth_schema_1 = require("./crud_auth.schema");
const mongoConfig_1 = require("../utils/mongoConfig");
let CrudAuthModule = class CrudAuthModule {
};
CrudAuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(mongoConfig_1.default.uri),
            mongoose_1.MongooseModule.forFeature([{ name: crud_auth_schema_1.Auth.name, schema: crud_auth_schema_1.AuthSchema }]),
        ],
        controllers: [crud_auth_controller_1.CrudAuthController],
        providers: [crud_auth_service_1.CrudAuthService],
        exports: [mongoose_1.MongooseModule],
    })
], CrudAuthModule);
exports.CrudAuthModule = CrudAuthModule;
//# sourceMappingURL=crud_auth.module.js.map