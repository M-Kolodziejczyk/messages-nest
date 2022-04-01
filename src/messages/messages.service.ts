import { MessagesRepositroy } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepositroy) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}

/// BAD WAY

// export class MessagesService {
//   messagesRepo: MessagesRepositroy;

//   constructor() {
//     // Serive is creating its own dependencies
//     // DONT DO THIS ON REAL APPS

//     this.messagesRepo = new MessagesRepositroy();
//   }
// }
