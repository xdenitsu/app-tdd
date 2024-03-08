import { Injectable, NotFoundException } from '@nestjs/common';
import { readJsonFile } from '../../jsonreader';

@Injectable()
export class MiceService {
  private readonly dataDirectory = './data/';

  findAll() {
    return readJsonFile(this.dataDirectory + 'mice.json').mice;
  }

  findOne(id: number) {
    const mice = this.findAll();
    const mouse = mice.find(mouse => mouse.id === id);
    if (!mouse) {
      throw new NotFoundException(`Mouse with id ${id} not found`);
    }
    return mouse;
  }
}
