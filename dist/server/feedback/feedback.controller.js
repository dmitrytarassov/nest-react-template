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
exports.FeedbackController = void 0;
const common_1 = require("@nestjs/common");
const feedback_service_1 = require("./feedback.service");
const SessionType_1 = require("../../lib/types/SessionType");
class InsuranceDto {
}
let FeedbackController = class FeedbackController {
    constructor(service) {
        this.service = service;
    }
    async insurance(dto, session) {
        try {
            const lastSend = session.insuranceRequestSend
                ? new Date(session.insuranceRequestSend)
                : new Date(+new Date() - 10000001);
            const goodTimeToSend = +new Date() - +lastSend >= 10000000;
            if (goodTimeToSend) {
                const message = `<b>Заказ страховки с сайта.</b>\n<code>${dto.email}</code>\n${dto.message}`;
                session.insuranceRequestSend = new Date().toString();
                await this.service.send(message);
            }
            return {
                ok: true,
            };
        }
        catch (e) {
            console.log(e);
            return {
                ok: false,
            };
        }
    }
};
__decorate([
    (0, common_1.Post)('insurance'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InsuranceDto, Object]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "insurance", null);
FeedbackController = __decorate([
    (0, common_1.Controller)('api/feedback'),
    __metadata("design:paramtypes", [feedback_service_1.FeedbackService])
], FeedbackController);
exports.FeedbackController = FeedbackController;
//# sourceMappingURL=feedback.controller.js.map