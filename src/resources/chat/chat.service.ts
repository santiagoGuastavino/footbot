// Dependencies
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

// Schemas
import { Chat } from 'src/model/chat.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat.name) private readonly chatModel: Model<Chat>,
  ) {}

  async findOne(filter: FilterQuery<Chat>): Promise<Chat> {
    return await this.chatModel.findOne(filter).lean();
  }
}
