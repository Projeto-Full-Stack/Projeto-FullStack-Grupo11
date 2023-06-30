import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class CreateUserDto {
  @ApiProperty({
    description: "Nome do usuário que será mostrado no perfil e nos comentários",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: "Email do usuário, utilizado para fazer o login",
    type: String,
    uniqueItems: true
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: "CPF do usuário",
    type: String,
    uniqueItems: true
  })
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty({
    description: "Telefone do usuário",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: "Data de aniversário do usuário",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  birthDate: string;

  @ApiProperty({
    description: "Descrição do usuário",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: "Booleano onde mostra se o usuário cadastrado é um anunciante de carros ou apenas um usuário comum",
    type: String
  })
  @IsBoolean()
  @IsNotEmpty()
  isVendor: boolean;

  @ApiProperty({
    description: "Senha do usuário",
    type: String,
    minLength: 8
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['trasform'],
  })
  password: string;
}
