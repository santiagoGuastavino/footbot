// Dependencies
import { Injectable, Logger } from '@nestjs/common';
import TelegramBot from 'node-telegram-bot-api';
import { Message } from './interfaces/message.interface';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class BotService {
  private readonly bot: TelegramBot;
  private logger = new Logger(TelegramBot.name);

  constructor() {
    this.bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
    this.bot.on('message', this.onReceiveMessage);
  }

  onReceiveMessage(msg: Message): void {
    this.logger.debug(msg);
    const chatId = msg.chat.id;
    this.sendMessageToUser(chatId, 'hello');
  }

  sendMessageToUser(userId: number, msg: string): void {
    this.bot.sendMessage(userId, msg);
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  sendAutoMessage(): void {
    this.sendMessageToUser(1469731081, 'auto message');
  }
}
