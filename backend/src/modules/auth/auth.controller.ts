import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiTags } from '@nestjs/swagger';

interface IUserLogin {
  email: string;
  password: string;
}

@ApiTags("Login")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('')
  @UseGuards(LocalAuthGuard)
  async login(@Body() user: IUserLogin) {
    return this.authService.login(user.email);
  }
}
