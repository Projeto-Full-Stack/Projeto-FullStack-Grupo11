import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

interface IUserLogin {
  email: string;
  password: string;
}

@ApiTags("Login")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('')
  @ApiOkResponse({ description: "Recebe email e senha para fazer o login", schema: {
    example : {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQG1haWwuY29tIiwidmVuZG9yIjp0cnVlLCJpYXQiOjE2ODgxMzQwMjAsImV4cCI6MTY4ODEzNzYyMCwic3ViIjoiODRjYTNjY2YtMTYzOS00Y2M0LTlhYTEtMWM1ODM1MzcyMDVkIn0.DpQeO9mFfTJBFjHUjf8UhewQY9NUvmjuBXuWfLv8cz4"
    }
  }})
  @ApiResponse({ status: 403, description: "Erro caso o email não seja encontrado ou a senha não seja identica a senha do email", schema : {
    example: {
      "statusCode": 401,
      "message": "Invalid email or password",
      "error": "Unauthorized"
    }
  }})
  @UseGuards(LocalAuthGuard)
  async login(@Body() user: IUserLogin) {
    return this.authService.login(user.email);
  }
}
