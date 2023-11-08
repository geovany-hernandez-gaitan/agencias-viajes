import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ComentarioDTO } from '../dtos/comentarios-dto';
import { ComentariosService } from '../services/comentarios.service';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Post()
  async create(@Body() loadBookings: ComentarioDTO) {
    const comentario = await this.comentariosService.create(loadBookings);
    const data = {
      message: 'Reserva creada correctamente',
      comentario,
    };
    return {
      data,
    };
  }

  @Get('/')
  async findAllComents() {
    const comentario = await this.comentariosService.findAllComents();
    const data = {
      message: 'Reserva obtenida',
      comentario,
    };
    return {
      data,
    };
  }
  @Get('/:id')
  async findAllcommentById(@Param('id') id: number) {
    const comentario = await this.comentariosService.findAllcommentById(id);
    console.log(comentario);

    const data = {
      message: 'Reserva obtenida',
      comentario,
    };
    console.log(data);
    return data;
  }

  @Put('/:id')
  async updateComment(
    @Param('id') id: number,
    @Body() loadBookings: ComentarioDTO,
  ) {
    const comentario = await this.comentariosService.updateComment(
      id,
      loadBookings,
    );
    const data = {
      message: 'Reserva actualizada',
      comentario,
    };
    return {
      data,
    };
  }

  @Delete('/:id')
  async deletedCommnet(@Param('id') id: number) {
    const comentario = await this.comentariosService.deletedCommnet(id);
    const data = {
      message: 'Reserva eliminada',
      comentario,
    };
    return {
      data,
    };
  }
}
