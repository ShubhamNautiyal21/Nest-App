// app.controller.ts

import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Request() req) {
    const user = await this.authService.validateUser(req.body.username, req.body.password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      access_token: await this.authService.login(user),
    };
  }

  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  protectedRoute() {
    return 'This route is protected with JWT authentication.';
  }
}
