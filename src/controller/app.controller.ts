import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { AppNotService } from '../service/app.not.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly appNotService: AppNotService,
  ) {}

  @Get('dsaf')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/not2')
  getNotHello(): string {
    return this.appNotService.getNotHello();
  }

}
