import { Module } from '@nestjs/common';
import { ComentariosController } from './controller/comentarios.controller';
import { ComentariosService } from './services/comentarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comentario } from './entities/comentarios-entities';

@Module({
  imports: [TypeOrmModule.forFeature([Comentario])],
  controllers: [ComentariosController],
  providers: [ComentariosService],
})
export class ComentariosModule {}
