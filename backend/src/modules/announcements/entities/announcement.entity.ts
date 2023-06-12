import { randomUUID } from 'crypto';

export class Announcement {
  readonly id: string;
  color: string;
  price: number;
  description: string;
  coverImage: string;
  mileage: number;
  avaliable: boolean;

  constructor() {
    this.id = randomUUID();
  }
}
