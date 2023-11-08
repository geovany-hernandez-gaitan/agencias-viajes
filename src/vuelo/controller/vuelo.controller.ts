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
import { DestinoService } from '../services/vuelo-services';
import { VuelosDto } from '../dtos/vuelos-dto';

@Controller('vuelos')
export class DestinoController {
  constructor(private readonly vueloService: DestinoService) {}

  @Post('/')
  async createdVuelos(@Body() payload: VuelosDto) {
    const newDestino = await this.vueloService.created(payload);
    const data = {
      data: newDestino,
      message: 'created',
    };
    return data;
  }

  @Get('/')
  async getVuelo() {
    const vuelos = await this.vueloService.getVuelo();
    const data = {
      data: vuelos,
      message: 'ok',
    };
    return data;
  }

  @Get('/:id')
  async getVueloById(@Param('id', ParseIntPipe) id: number) {
    const vuelos = await this.vueloService.getVueloById(id);
    const data = {
      data: vuelos,
      message: 'ok',
    };
    return data;
  }

  @Put('/:id')
  async updatedDestino(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: VuelosDto,
  ) {
    const vuelos = await this.vueloService.updated(id, payload);
    const data = {
      data: vuelos,
    };
    return data;
  }

  @Delete('/:id')
  async deletedVuelo(@Param('id', ParseIntPipe) id: number) {
    const vuelos = await this.vueloService.delete(id);
    const data = {
      data: vuelos,
    };
    return data;
  }
}
