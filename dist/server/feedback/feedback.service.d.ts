import * as TelegramBot from 'node-telegram-bot-api';
export declare class FeedbackService {
    bot: TelegramBot;
    constructor();
    send(message: string): Promise<void>;
}
