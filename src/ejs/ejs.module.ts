import { Module } from '@nestjs/common';
import { EjsController } from './ejs.controller';
import { EjsService } from './ejs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/model/user.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [EjsController],
  providers: [EjsService],
})
export class EjsModule {}
