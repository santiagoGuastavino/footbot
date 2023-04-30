// Dependencies
import { Module } from '@nestjs/common';

// Services
import { BotService } from './bot.service';

@Module({
  imports: [],
  providers: [BotService],
})
export class BotModule {}
