// auth.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './user.model';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AuthService {
  // In real-world, this should be replaced with a database query
  private readonly users: User[] = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
  ];

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = this.users.find((user) => user.username === username);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async login(user: User): Promise<string> {
    const payload = { username: user.username, sub: user.id };
    const token = jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' }); // Replace 'your-secret-key' with your actual secret key and set the desired expiration time

    return token;
  }
}
