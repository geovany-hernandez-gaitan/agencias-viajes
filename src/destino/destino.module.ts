import { Module } from '@nestjs/common';
import { DestinoController } from './controller/destino.controller';
import { DestinoService } from './services/destino.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Destino } from './entities/destino-entities';

@Module({
  imports: [TypeOrmModule.forFeature([Destino])],
  controllers: [DestinoController],
  providers: [DestinoService],
})
export class DestinoModule {}
