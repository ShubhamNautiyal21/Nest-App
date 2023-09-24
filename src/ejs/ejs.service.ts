import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from 'src/dto/user.dto';

@Injectable()
export class EjsService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDTO>,
  ) {}
  render(name: string) {
    const data = {
      name,
      header: 'EJS Header',
      footer: 'EJS Footer',
    };
    return data;
  }

  async getUser() {
  
    const data = this.userModel.find().skip(10).limit(10);
    if (!data) return null;
    return data;
  }
}
