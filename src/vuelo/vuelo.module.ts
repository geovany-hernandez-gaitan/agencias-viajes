import { Module } from '@nestjs/common';
import { DestinoController } from './controller/vuelo.controller';
import { DestinoService } from './services/vuelo-services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vuelos } from './entities/vuelos-entities';

@Module({
  imports: [TypeOrmModule.forFeature([Vuelos])],
  controllers: [DestinoController],
  providers: [DestinoService],
})
export class VueloModule {}
