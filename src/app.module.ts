import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EjsModule } from './ejs/ejs.module';
import { MainMiddleware } from './main/main.middleware';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EjsModule,
    MongooseModule.forRoot(
      'mongodb+srv://shubham:nest123@cluster0.4jelftj.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MainMiddleware).forRoutes('*');
  }
}
