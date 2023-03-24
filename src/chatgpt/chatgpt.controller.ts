import { Controller, Get, Post } from '@nestjs/common';
import { ChatgptService } from './chatgpt.service';

@Controller('chatgpt')
export class ChatgptController {
  constructor(private chatgptService: ChatgptService) {}

  @Get('/')
  async getHealthFoodAnalytics() {
    return this.chatgptService.postGpt();
  }
}
