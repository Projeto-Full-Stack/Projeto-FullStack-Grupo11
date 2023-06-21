import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.usersRepository.findByEmail(
      createUserDto.email,
    );

    if (findUser) {
      throw new ConflictException('User already exists');
    }

    const user = await this.usersRepository.create(createUserDto);

    return user;
  }

  async findAll() {
    const users = await this.usersRepository.findAll();

    return users;
  }

  async findOne(id: string) {
    const findUser = await this.usersRepository.findOne(id);

    if (!findUser) {
      throw new NotFoundException('User not found');
    }

    return findUser;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findByEmail(email);

    if (user) {
      throw new ConflictException('Email already exists');
    }

    return user;
  }

  async loginEmail(email: string){
    const user = await this.usersRepository.loginEmail(email);
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.usersRepository.findOne(id);

    if (!findUser) {
      throw new NotFoundException('User not found');
    }

    const FindEmail = await this.usersRepository.findByEmail(
      updateUserDto.email,
    );

    if (FindEmail) {
      throw new ConflictException('Email already exists');
    }

    const user = await this.usersRepository.update(id, updateUserDto);

    return user;
  }

  async remove(id: string) {
    await this.usersRepository.delete(id);

    return;
  }
}
