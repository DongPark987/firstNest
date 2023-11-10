import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { AppNotService } from './service/app.not.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppNotService],
})
export class AppModule {}
