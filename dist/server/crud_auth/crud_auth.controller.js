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
exports.CrudAuthController = void 0;
const common_1 = require("@nestjs/common");
const crud_auth_service_1 = require("./crud_auth.service");
const BaseCrudMongoController_1 = require("../utils/BaseCrudMongoController");
const Base64ToFileInspector_1 = require("../utils/Base64ToFileInspector");
const SessionType_1 = require("../../lib/types/SessionType");
let CrudAuthController = class CrudAuthController extends BaseCrudMongoController_1.BaseCrudMongoController {
    constructor(service) {
        super(service);
        this.service = service;
    }
    async checkAuth(response, request, session) {
        const auth = this.service.checkAuth(request.headers.Authorization, session);
        if (auth) {
            return response.status(common_1.HttpStatus.OK);
        }
        return response.status(common_1.HttpStatus.UNAUTHORIZED);
    }
    async login(response, element, session) {
        const user = await this.service.login(element.login, element.password, session);
        if (user) {
            return response.status(common_1.HttpStatus.OK).json(user);
        }
        return response.status(common_1.HttpStatus.UNAUTHORIZED);
    }
};
__decorate([
    (0, common_1.Get)('/checkAuth'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CrudAuthController.prototype, "checkAuth", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CrudAuthController.prototype, "login", null);
CrudAuthController = __decorate([
    (0, common_1.Controller)('crud/auth'),
    __metadata("design:paramtypes", [crud_auth_service_1.CrudAuthService])
], CrudAuthController);
exports.CrudAuthController = CrudAuthController;
//# sourceMappingURL=crud_auth.controller.js.map