import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jawt.auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { ApiOkResponse, ApiResponse, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger/dist/decorators';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ description: "Cria um usuário, Email e CPF são únicos", schema: { 
    example: {
      "id": "bda6fcf8-f593-49b1-8ab0-26fe300b885f",
      "name": "teste2",
      "email": "teste2@mail.com",
      "cpf": "1234567890",
      "phone": "123456",
      "birthDate": "10-10-1998",
      "description": "1234567",
      "reset_token": null,
      "isVendor": true
    }
  }})
  @ApiResponse({status: 409, description: "Erro de conflito: emai já registrado", schema: {
    example: {
      "statusCode": 409,
      "message": "Email already registered.",
      "error": "Conflict"
    }
  }})
  @ApiResponse({status: 409, description: "Erro de conflito: CPF já registrado", schema: {
    example: {
      "statusCode": 409,
      "message": "CPF already registered.",
      "error": "Conflict"
    }
  }})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ description: "Recebe todas os usuários", schema: { 
    example: [
      {
        "id": "84ca3ccf-1639-4cc4-9aa1-1c583537205d",
        "name": "teste",
        "email": "teste@mail.com",
        "cpf": "12345678901",
        "phone": "123456",
        "birthDate": "10-10-1998",
        "description": "1234567",
        "reset_token": null,
        "isVendor": true,
        "address": {
          "id": "a99cfbb7-f493-4918-bbb7-55224511fd6b",
          "street": "Rua teste address",
          "state": "Estado de teste",
          "city": "Cidade do teste",
          "number": 535,
          "complement": null,
          "cep": "1234567",
          "userId": "84ca3ccf-1639-4cc4-9aa1-1c583537205d"
        }
      },
      {
        "id": "bda6fcf8-f593-49b1-8ab0-26fe300b885f",
        "name": "teste2",
        "email": "teste2@mail.com",
        "cpf": "1234567890",
        "phone": "123456",
        "birthDate": "10-10-1998",
        "description": "1234567",
        "reset_token": null,
        "isVendor": true,
        "address": null
      }
    ]
  }})
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: "Recebe todas os usuários", schema: { 
    example: {
      "id": "84ca3ccf-1639-4cc4-9aa1-1c583537205d",
      "name": "teste",
      "email": "teste@mail.com",
      "cpf": "12345678901",
      "phone": "123456",
      "birthDate": "10-10-1998",
      "description": "1234567",
      "reset_token": null,
      "isVendor": true,
      "address": {
        "id": "a99cfbb7-f493-4918-bbb7-55224511fd6b",
        "street": "Rua teste address - updated 2",
        "state": "Estado de teste",
        "city": "Cidade do teste",
        "number": 535,
        "complement": null,
        "cep": "1234567",
        "userId": "84ca3ccf-1639-4cc4-9aa1-1c583537205d"
      }
    }
  }})
  @ApiResponse({status: 404, description: "Erro de conflito: CPF já registrado", schema: {
    example: {
      "statusCode": 404,
      "message": "User not found",
      "error": "Not Found"
    }
  }})
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }



  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ description: "Recebe todas os usuários", schema: { 
    example: {
      "id": "84ca3ccf-1639-4cc4-9aa1-1c583537205d",
      "name": "teste - last update",
      "email": "teste@mail.com",
      "cpf": "12345678901",
      "phone": "123456",
      "birthDate": "10-10-1998",
      "description": "1234567",
      "reset_token": null,
      "isVendor": true
    }
  }})
  @ApiResponse({status: 409, description: "Erro de conflito: emai já registrado", schema: {
    example: {
      "statusCode": 409,
      "message": "Email already registered.",
      "error": "Conflict"
    }
  }})
  @ApiResponse({status: 409, description: "Erro de conflito: CPF já registrado", schema: {
    example: {
      "statusCode": 409,
      "message": "CPF already registered.",
      "error": "Conflict"
    }
  }})
  @ApiResponse({status: 404, description: "Erro de conflito: CPF já registrado", schema: {
    example: {
      "statusCode": 404,
      "message": "User not found",
      "error": "Not Found"
    }
  }})
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Request() req: any) {
    if(req.user.id !== id) throw new UnauthorizedException()

    return this.usersService.update(id, updateUserDto);
  }



  @Delete(':id')
  @ApiBearerAuth()
  @ApiResponse({ status: 204, description: "Deleta um usuário" })
  @ApiResponse({status: 404, description: "Erro de conflito: CPF já registrado", schema: {
    example: {
      "statusCode": 404,
      "message": "User not found",
      "error": "Not Found"
    }
  }})
  
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string,  @Request() req: any) {
    if(req.user.id !== id) throw new UnauthorizedException()

    return this.usersService.remove(id);
  }

  @HttpCode(200)
  @Post('resetPassword')
  async sendEmailResetPassword(@Body('email') email: string) {
    await this.usersService.sendEmailResetPassword(email);
    return { message: 'token send' };
  }

  @Patch('resetPassword/:token')
  async resetPassword(
    @Param('token') token: string,
    @Body('password') password: string,
  ) {
    await this.usersService.resetPassword(password, token);
    return { message: 'password change with sucess' };
  }
}
