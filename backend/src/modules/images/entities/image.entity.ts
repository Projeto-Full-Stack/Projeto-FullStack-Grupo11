import { randomUUID } from 'crypto';

export class Image {
  readonly id: string;
  imageUrl: string;
  announcement_id?: string;

  constructor() {
    this.id = randomUUID();
  }
}
