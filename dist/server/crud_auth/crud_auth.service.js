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
exports.CrudAuthService = void 0;
const common_1 = require("@nestjs/common");
const BaseCrudMongoModel_1 = require("../utils/BaseCrudMongoModel");
const mongoose_1 = require("mongoose");
const crud_auth_schema_1 = require("./crud_auth.schema");
const mongoose_2 = require("@nestjs/mongoose");
const SessionType_1 = require("../../lib/types/SessionType");
const crypto_1 = require("crypto");
let CrudAuthService = class CrudAuthService extends BaseCrudMongoModel_1.BaseCrudMongoModel {
    constructor(model) {
        super(model);
        this.model = model;
    }
    async login(login, password, session) {
        const users = await this.readAll({
            filter: [`login,${login}`, `password,${password}`],
            limit: '1',
            page: '1',
            sort: [],
            offset: '0',
        });
        const [user] = users;
        if (user) {
            session.auth = crypto_1.default.createHash('sha1').digest('hex');
            return user;
        }
        return null;
    }
    checkAuth(hash, session) {
        return hash === session.auth;
    }
    logout(session) {
        session.auth = '';
        delete session.auth;
        return true;
    }
};
CrudAuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(crud_auth_schema_1.Auth.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CrudAuthService);
exports.CrudAuthService = CrudAuthService;
//# sourceMappingURL=crud_auth.service.js.map