import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  MessagesService: MessagesService;

  constructor() {
    // Serive is creating its own dependencies
    // DONT DO THIS ON REAL APPS

    this.MessagesService = new MessagesService();
  }

  @Get()
  listMessgaes() {
    return this.MessagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.MessagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.MessagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found!');
    }

    return message;
  }
}
