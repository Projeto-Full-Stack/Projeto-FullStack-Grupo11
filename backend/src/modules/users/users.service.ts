import { randomUUID } from 'node:crypto';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { MailService } from 'src/utils/mail.service';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private mailService: MailService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userByEmail = await this.usersRepository.findByEmail(
      createUserDto.email,
    );
    if (userByEmail) throw new ConflictException('Email already registered.');

    const userByCpf = await this.usersRepository.findByCpf(createUserDto.cpf);
    if (userByCpf) throw new ConflictException('CPF already registered.');

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

  async loginEmail(email: string) {
    const user = await this.usersRepository.loginEmail(email);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.usersRepository.findOne(id);

    if (!findUser) {
      throw new NotFoundException('User not found');
    }

    if(updateUserDto.email){
      const findEmail = await this.usersRepository.findByEmail(updateUserDto.email);

      if (findEmail && findEmail.id !== id) {
        throw new ConflictException('Email already exists');
      }
    }

    if(updateUserDto.cpf){
      const findCpf = await this.usersRepository.findByCpf(updateUserDto.cpf);

      if (findCpf && findCpf.id !== id) {
        throw new ConflictException('CPF already exists');
      }
    }

    const user = await this.usersRepository.update(id, updateUserDto);

    return user;
  }

  async remove(id: string) {
    await this.usersRepository.delete(id);

    return;
  }

  async sendEmailResetPassword(email: string) {
    const findUser = await this.usersRepository.loginEmail(email);

    if (!findUser) {
      throw new NotFoundException('User not found');
    }

    const resetToken = randomUUID();

    await this.usersRepository.updateToken(email, resetToken);

    const resetPasswordTemplate = this.mailService.resetPasswordTemplate(
      email,
      findUser.name,
      resetToken,
    );

    await this.mailService.SendEmail(resetPasswordTemplate);
  }

  async resetPassword(password: string, reset_token: string) {
    const findUser = await this.usersRepository.findByToken(reset_token);

    if (!findUser) {
      throw new NotFoundException('User not found');
    }

    await this.usersRepository.updatePassword(findUser.id, password);
  }
}
