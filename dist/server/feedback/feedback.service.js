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
exports.FeedbackService = void 0;
const common_1 = require("@nestjs/common");
const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TELEGRAM_BOT_TOKEN;
const chat = process.env.TELEGRAM_CHAT_ID;
let FeedbackService = class FeedbackService {
    constructor() {
        this.bot = new TelegramBot(token, { polling: false });
    }
    async send(message) {
        await this.bot.sendMessage(chat, message, { parse_mode: 'HTML' });
    }
};
FeedbackService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FeedbackService);
exports.FeedbackService = FeedbackService;
//# sourceMappingURL=feedback.service.js.map