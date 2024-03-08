import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { NotFoundException } from '@nestjs/common';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw NotFoundException for invalid ID when getting a single cat', () => {
    expect(() => service.findOne(4)).toThrow(NotFoundException);
  });

  it('should return an array of JSON objects when getting all cats', () => {
    const cats = service.findAll();
    expect(Array.isArray(cats)).toBeTruthy();
    expect(cats.length).toBeGreaterThan(0);
    cats.forEach(cat => {
      expect(typeof cat).toBe('object');
    });
  });

});
