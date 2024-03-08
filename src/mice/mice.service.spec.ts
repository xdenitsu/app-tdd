import { Test, TestingModule } from '@nestjs/testing';
import { MiceService } from './mice.service';
import { NotFoundException } from '@nestjs/common';

describe('MiceService', () => {
  let service: MiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MiceService],
    }).compile();

    service = module.get<MiceService>(MiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw NotFoundException for invalid ID when getting a single mouse', () => {
    expect(() => service.findOne(4)).toThrow(NotFoundException);
  });

  it('should return an array of JSON objects when getting all mice', () => {
    const mice = service.findAll();
    expect(Array.isArray(mice)).toBeTruthy();
    expect(mice.length).toBeGreaterThan(0);
    mice.forEach(mouse => {
      expect(typeof mouse).toBe('object');
    });
  });
});
