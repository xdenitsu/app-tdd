import { Injectable, NotFoundException } from '@nestjs/common';
import { readJsonFile } from '../../jsonreader';

@Injectable()
export class CatsService {
  private readonly dataDirectory = './data/';

  findAll() {
    return readJsonFile(this.dataDirectory + 'cats.json').cats;
  }

  findOne(id: number) {
    const cats = this.findAll();
    const cat = cats.find(cat => cat.id === id);
    if (!cat) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }
    return cat;
  }

}
