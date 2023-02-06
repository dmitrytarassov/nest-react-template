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
exports.BaseApiMongoController = void 0;
const common_1 = require("@nestjs/common");
class BaseApiMongoController {
    constructor(service) {
        this.service = service;
    }
    async fetchAll(query, response) {
        const data = await this.service.readAll(query);
        const total = await this.service.getTotal(query);
        return response.status(common_1.HttpStatus.OK).json({
            data,
            total,
        });
    }
    async findById(response, _id) {
        const element = await this.service.readById(_id);
        if (element) {
            return response.status(common_1.HttpStatus.OK).json(Object.assign(Object.assign({}, element._doc), { id: element.id }));
        }
        else {
            return response.status(common_1.HttpStatus.NOT_FOUND).json({
                statusCode: 404,
            });
        }
    }
}
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BaseApiMongoController.prototype, "fetchAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BaseApiMongoController.prototype, "findById", null);
exports.BaseApiMongoController = BaseApiMongoController;
//# sourceMappingURL=BaseApiMongoController.js.map