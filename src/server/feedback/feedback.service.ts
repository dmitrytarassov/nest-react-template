import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_BOT_TOKEN;
const chat = process.env.TELEGRAM_CHAT_ID;

@Injectable()
export class FeedbackService {
  bot: TelegramBot;
  constructor() {
    this.bot = new TelegramBot(token, { polling: false });
  }

  async send(message: string) {
    await this.bot.sendMessage(chat, message, { parse_mode: 'HTML' });
  }
}
