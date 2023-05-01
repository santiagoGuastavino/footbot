// Dependencies
import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
// import { Cron, CronExpression } from '@nestjs/schedule';

// Interfaces
import { Message } from './interfaces/message.interface';

@Injectable()
export class BotService {
  private readonly bot: TelegramBot;

  constructor() {
    this.bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
    this.bot.on('message', this.onReceiveMessage);
  }

  onReceiveMessage = (msg: Message): void => {
    // saveChat()
    const chatId = msg.chat.id;
    this.sendMessageToUser(chatId, 'hello');
  };

  sendMessageToUser = (userId: number, msg: string): void => {
    this.bot.sendMessage(userId, msg);
  };

  // @Cron(CronExpression.EVERY_10_SECONDS)
  // sendAutoMessage(): void {
  //   this.sendMessageToUser(1469731081, 'auto message');
  // }
}
