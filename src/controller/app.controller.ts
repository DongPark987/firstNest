import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { AppNotService } from '../service/app.not.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly appNotService: AppNotService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/not')
  getNotHello(): string {
    return this.appNotService.getNotHello();
  }
}
