// auth.module.ts

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';


@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key', // Replace with your own secret key
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtModule],
  controllers: [AuthController],
})
export class AuthModule {}
