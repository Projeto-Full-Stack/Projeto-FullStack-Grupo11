import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: string;
  description: string;
  isVendor: boolean;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
