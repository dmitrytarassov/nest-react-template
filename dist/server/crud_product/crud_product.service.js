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
exports.CrudProductService = void 0;
const common_1 = require("@nestjs/common");
const BaseCrudMongoModel_1 = require("../utils/BaseCrudMongoModel");
const mongoose_1 = require("mongoose");
const crud_product_schema_1 = require("./crud_product.schema");
const mongoose_2 = require("@nestjs/mongoose");
let CrudProductService = class CrudProductService extends BaseCrudMongoModel_1.BaseCrudMongoModel {
    constructor(model) {
        super(model);
        this.model = model;
    }
};
CrudProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(crud_product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CrudProductService);
exports.CrudProductService = CrudProductService;
//# sourceMappingURL=crud_product.service.js.map