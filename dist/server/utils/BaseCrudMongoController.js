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
exports.BaseCrudMongoController = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const Base64ToFileInspector_1 = require("./Base64ToFileInspector");
const BaseApiMongoController_1 = require("./BaseApiMongoController");
class BaseCrudMongoController extends BaseApiMongoController_1.BaseApiMongoController {
    constructor(service) {
        super(service);
        this.service = service;
    }
    async create(response, element) {
        const newElement = await this.service.create(element);
        return response.status(common_1.HttpStatus.CREATED).json(Object.assign(Object.assign({}, newElement._doc), { id: newElement.id }));
    }
    async update(response, id, element) {
        const updatedElement = await this.service.update(id, element);
        return response.status(common_1.HttpStatus.OK).json(Object.assign(Object.assign({}, updatedElement._doc), { id: updatedElement.id }));
    }
    async delete(response, id) {
        const deletedElement = await this.service.delete(id);
        return response.status(common_1.HttpStatus.OK).json({
            data: deletedElement,
        });
    }
}
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, Base64ToFileInspector_1.Base64ToFileInspector)(path.join(__dirname, '../../../public/'))),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BaseCrudMongoController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, common_1.UseInterceptors)((0, Base64ToFileInspector_1.Base64ToFileInspector)(path.join(__dirname, '../../../public/'))),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BaseCrudMongoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BaseCrudMongoController.prototype, "delete", null);
exports.BaseCrudMongoController = BaseCrudMongoController;
//# sourceMappingURL=BaseCrudMongoController.js.map