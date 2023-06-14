import { randomUUID } from 'crypto';
import { Image } from 'src/modules/images/entities/image.entity';

export class Announcement {
  readonly id: string;
  brand: string;
  model: string;
  fuel: string;
  fipe: number;
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
