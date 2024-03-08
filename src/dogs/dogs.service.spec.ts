import { Test, TestingModule } from '@nestjs/testing';
import { DogsService } from './dogs.service';
import { NotFoundException } from '@nestjs/common';

describe('DogsService', () => {
  let service: DogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogsService],
    }).compile();

    service = module.get<DogsService>(DogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw NotFoundException for invalid ID when getting a single dog', () => {
    expect(() => service.findOne(4)).toThrow(NotFoundException);
  });

  it('should return an array of JSON objects when getting all dogs', () => {
    const dogs = service.findAll();
    expect(Array.isArray(dogs)).toBeTruthy();
    expect(dogs.length).toBeGreaterThan(0);
    dogs.forEach(dog => {
      expect(typeof dog).toBe('object');
    });
  });
});
