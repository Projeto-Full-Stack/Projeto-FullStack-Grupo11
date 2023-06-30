import { randomUUID } from 'node:crypto';

export class Comment {
  readonly id: string;
  comment: string;
  createdAt: Date;
  authorId: string;
  announcementId: string;

  constructor() {
    this.id = randomUUID();
  }
}
