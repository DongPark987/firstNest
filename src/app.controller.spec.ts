import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './service/app.service';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Welcome to my Movie API"', () => {
      expect(appController.home()).toBe('Welcome to my Movie API');
    });
  });
});
