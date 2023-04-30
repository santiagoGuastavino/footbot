// Dependencies
import { Injectable, Logger } from '@nestjs/common';
import TelegramBot from 'node-telegram-bot-api';
import { Message } from './interfaces/message.interface';

@Injectable()
export class BotService {
  private readonly bot: TelegramBot;
  private logger = new Logger(TelegramBot.name);

  constructor() {
    this.bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
    this.bot.on('message', this.onReceiveMessage);
  }

  onReceiveMessage = (msg: Message) => {
    const chatId = msg.chat.id;
    this.sendMessageToUser(chatId, 'hello');
  };

  sendMessageToUser = (userId: number, msg: string) => {
    this.bot.sendMessage(userId, msg);
  };
}
