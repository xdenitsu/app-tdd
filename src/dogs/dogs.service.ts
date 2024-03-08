import { Injectable, NotFoundException } from '@nestjs/common';
import { readJsonFile } from '../../jsonreader';

@Injectable()
export class DogsService {

  private readonly dataDirectory = './data/';

  findAll() {
    return readJsonFile(this.dataDirectory + 'dogs.json').dogs;
  }

  findOne(id: number) {
    const dogs  = this.findAll();
    const dog = dogs.find(dog => dog.id === id);
    if (!dog) {
      throw new NotFoundException(`Dog with id ${id} not found`);
    }
    return dog;
  }

}
