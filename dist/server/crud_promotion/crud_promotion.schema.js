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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionSchema = exports.Promotion = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const seo_schema_1 = require("../utils/seo.schema");
let Promotion = class Promotion extends seo_schema_1.Seo {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Promotion.prototype, "photos", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Promotion.prototype, "weight", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Promotion.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Promotion.prototype, "externalUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Promotion.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Promotion.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Promotion.prototype, "shortText", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Promotion.prototype, "rentalId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Promotion.prototype, "promotionType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Promotion.prototype, "promotionText", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Promotion.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Promotion.prototype, "showOnMainPage", void 0);
Promotion = __decorate([
    (0, mongoose_1.Schema)()
], Promotion);
exports.Promotion = Promotion;
exports.PromotionSchema = mongoose_1.SchemaFactory.createForClass(Promotion);
//# sourceMappingURL=crud_promotion.schema.js.map