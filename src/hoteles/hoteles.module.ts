import { Inject, Module } from '@nestjs/common';
import { HotelesController } from './controllers/hoteles.controller';
import { HotelesService } from './services/hoteles.service';
import { Hotels } from './entities/hoteles.entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Hotels])],
  controllers: [HotelesController],
  providers: [HotelesService],
})
export class HotelesModule {}
