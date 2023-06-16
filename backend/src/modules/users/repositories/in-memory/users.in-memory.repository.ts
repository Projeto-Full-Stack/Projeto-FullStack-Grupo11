import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UsersRepository } from '../users.repository';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../../dto/update-user.dto';

@Injectable()
export class UsersInMemoryRepository implements UsersRepository {
  private database: User[] = [];
  create(data: CreateUserDto): User | Promise<User> {
    const newUser = new User();
    Object.assign(newUser, {
      ...data,
    });
    this.database.push(newUser);
    return plainToInstance(User, newUser);
  }

  findAll(): User[] | Promise<User[]> {
    return plainToInstance(User, this.database);
  }

  findOne(id: string): User | Promise<User> {
    const user = this.database.find((user) => user.id === id);
    return plainToInstance(User, user);
  }

  findByEmail(email: string): User | Promise<User> {
    const user = this.database.find((user) => user.email === email);
    return plainToInstance(User, user);
  }

  update(id: string, data: UpdateUserDto): User | Promise<User> {
    const user = this.database.findIndex((user) => user.id === id);
    this.database[user] = {
      ...this.database[user],
      ...data,
    };
    return plainToInstance(User, this.database[user]);
  }

  delete(id: string): void | Promise<void> {
    const user = this.database.findIndex((user) => user.id === id);
    this.database.splice(user, 1);
  }
}
