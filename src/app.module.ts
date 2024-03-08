import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { MiceModule } from './mice/mice.module';

@Module({
  imports: [CatsModule, DogsModule, MiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
