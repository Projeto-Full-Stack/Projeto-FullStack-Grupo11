import { randomUUID } from 'crypto';

export class Announcement {
  readonly id: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  fipe: number;
  color: string;
  price: number;
  description: string;
  coverImage: string;
  mileage: number;
  avaliable: boolean;
  user_id: string;

  constructor() {
    this.id = randomUUID();
  }
}
