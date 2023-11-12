import { Module } from '@nestjs/common';
// Remove the duplicate import statement
// import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { AppNotService } from './service/app.not.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

//데코레이터, 데코는 클래스의 함수 기능을 추가한다.
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})

export class AppModule {}
