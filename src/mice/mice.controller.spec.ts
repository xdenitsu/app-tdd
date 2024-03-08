import { Test, TestingModule } from '@nestjs/testing';
import { MiceController } from './mice.controller';
import { MiceService } from './mice.service';

describe('MiceController', () => {
  let controller: MiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiceController],
      providers: [MiceService],
    }).compile();

    controller = module.get<MiceController>(MiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
