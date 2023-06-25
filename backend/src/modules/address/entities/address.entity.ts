import { randomUUID } from 'node:crypto';

export class Address {
    readonly id: string;
    street: string;
    state: string;
    city: string;
    number: number;
    complement: string;
    cep: string;
    userId: string;
    
  constructor() {
    this.id = randomUUID();
  }
}
