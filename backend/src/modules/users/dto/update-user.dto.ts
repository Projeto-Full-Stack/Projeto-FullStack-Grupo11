import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
    IsBoolean,
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        description: "Nome do usuário que será mostrado no perfil e nos comentários",
        type: String,
        required: false
    })
    @IsString()
    name: string;
    
    @ApiProperty({
        description: "Email do usuário, utilizado para fazer o login",
        type: String,
        uniqueItems: true,
        required: false
    })
    @IsEmail()
    email: string;
    
    @ApiProperty({
        description: "CPF do usuário",
        type: String,
        uniqueItems: true,
        required: false
    })
    @IsString()
    cpf: string;

    @ApiProperty({
        description: "Telefone do usuário",
        type: String,
        required: false
    })
    @IsString()
    phone: string;

    @ApiProperty({
        description: "Data de aniversário do usuário",
        type: String,
        required: false
    })
    @IsString()
    birthDate: string;

    @ApiProperty({
        description: "Descrição do usuário",
        type: String,
        required: false
    })
    @IsString()
    description: string;
}
