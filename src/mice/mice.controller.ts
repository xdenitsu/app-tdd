import { Controller, Get, Param } from '@nestjs/common';
import { MiceService } from './mice.service';

@Controller('mice')
export class MiceController {
  constructor(private readonly miceService: MiceService) {}

  @Get()
  findAll() {
    return this.miceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.miceService.findOne(+id);
  }

}
