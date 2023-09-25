import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EjsModule } from './ejs/ejs.module';
import { MainMiddleware } from './main/main.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    EjsModule,
    MongooseModule.forRoot(
      'mongodb+srv://shubham:nest123@cluster0.4jelftj.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MainMiddleware).forRoutes('*');
  }
}
