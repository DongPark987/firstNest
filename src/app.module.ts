import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { AppNotService } from './service/app.not.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

//데코레이터, 데코는 클래스의 함수 기능을 추가한다.
@Module({
  imports: [],
  controllers: [AppController, MoviesController],
  providers: [AppService, AppNotService, MoviesService],
})
export class AppModule {}
