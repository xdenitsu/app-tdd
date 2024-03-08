import { Module } from '@nestjs/common';
import { MiceService } from './mice.service';
import { MiceController } from './mice.controller';

@Module({
  controllers: [MiceController],
  providers: [MiceService],
})
export class MiceModule {}
