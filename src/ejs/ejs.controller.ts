import {
  Controller,
  Get,
  Post,
  Query,
  Render,
  UseInterceptors,
} from '@nestjs/common';
import { EjsService } from './ejs.service';
import { MainInterceptor } from 'src/main/main.interceptor';
import { CustomDecorator } from 'src/decorators/custom.decorator';

@Controller('ejs')
export class EjsController {
  constructor(private readonly ejsService: EjsService) {}

  @Get()
  @Render('index')
  render(@Query() query) {
    let name = query.name as string;
    if (!name) name = 'Default';
    const data = this.ejsService.render(name);
    return { data };
  }

  @Post()
  customDecorator(@CustomDecorator('name') returnedData: any) {
    return returnedData;
  }

  @Get('getUser')
  @UseInterceptors(MainInterceptor)
  async getUser() {
    const data = await this.ejsService.getUser();
    return data;
  }
}
