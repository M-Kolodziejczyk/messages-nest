import { MessagesRepositroy } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepositroy;

  constructor() {
    // Serive is creating its own dependencies
    // DONT DO THIS ON REAL APPS

    this.messagesRepo = new MessagesRepositroy();
  }

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
