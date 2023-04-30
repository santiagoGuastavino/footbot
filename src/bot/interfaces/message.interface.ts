import { Chat } from 'node-telegram-bot-api';
import { From } from './from.interface';

export interface Message {
  message_id: number;
  from: From;
  chat: Chat;
  date: number;
  text: string;
}
