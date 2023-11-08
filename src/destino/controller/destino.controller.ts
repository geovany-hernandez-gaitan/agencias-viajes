import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { DestinoService } from '../services/destino.service';
import { DestinoDto } from '../dtos/destino-dto';

@Controller('destino')
export class DestinoController {
  constructor(private readonly destinoService: DestinoService) {}

  @Post('/')
  async createdDestino(@Body() payload: DestinoDto) {
    const newDestino = await this.destinoService.created(payload);
    const data = {
      data: newDestino,
      message: 'created',
    };
    return data;
  }

  @Get('/')
  async getDestino() {
    const destino = await this.destinoService.getDestino();
    const data = {
      data: destino,
      message: 'ok',
    };
    return data;
  }

  @Get('/:id')
  async getDestinoId(@Param('id', ParseIntPipe) id: number) {
    const destino = await this.destinoService.getDestinoId(id);
    const data = {
      data: destino,
      message: 'ok',
    };
    return data;
  }

  @Put('/:id')
  async updatedDestino(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: DestinoDto,
  ) {
    const destino = await this.destinoService.updated(id, payload);
    const data = {
      data: destino,
    };
    return data;
  }

  @Delete('/:id')
  async deletedDestino(@Param('id', ParseIntPipe) id: number) {
    const destino = await this.destinoService.delete(id);
    const data = {
      data: destino,
    };
    return data;
  }
}
