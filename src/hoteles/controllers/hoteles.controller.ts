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
import { HotelesService } from '../services/hoteles.service';
import { HotelsDto } from '../dtos/hoteles.dto';

@Controller('hoteles')
export class HotelesController {
  constructor(private readonly hotelesServices: HotelesService) {}

  @Post()
  async create(@Body() loadHotels: HotelsDto) {
    const hotel = await this.hotelesServices.create(loadHotels);
    const data = {
      message: 'Hotel creado',
      hotel,
    };
    return {
      data,
    };
  }

  @Get('/')
  async findAll() {
    const hotels = await this.hotelesServices.findAll();
    const data = {
      message: 'Hoteles encontrados',
      hotels,
    };
    return {
      data,
    };
  }

  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const hotel = await this.hotelesServices.getHotelsId(id);
    const data = {
      message: 'Hotel encontrado',
      hotel,
    };
    return {
      data,
    };
  }
  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() loadHotels: HotelsDto,
  ) {
    const hotel = await this.hotelesServices.updateHotels(id, loadHotels);
    const data = {
      message: 'Hotel actualizado',
      hotel,
    };
    return {
      data,
    };
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const hotel = await this.hotelesServices.deleteHotels(id);
    const data = {
      message: 'Hotel eliminado',
      hotel,
    };
    return {
      data,
    };
  }
}
