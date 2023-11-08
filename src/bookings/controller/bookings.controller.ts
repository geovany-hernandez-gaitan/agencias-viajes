import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { BookingsService } from '../services/bookings.service';
import { BookingsDto } from '../dtos';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post('/')
  async create(@Body() payload: BookingsDto) {
    const bookings = await this.bookingsService.create(payload);
    console.log(bookings);
    const data = {
      data: bookings,
      message: 'Reserva creada',
    };

    return data;
  }

  @Get('/')
  async findAllBookings() {
    const reserva = await this.bookingsService.getReserva();
    const data = {
      data: reserva,
      message: 'ok',
    };
    return data;
  }
  @Get('/:id')
  async findAllBookingsId(@Param('id') id: number) {
    const bookings = await this.bookingsService.findAllBookingsId(id);
    console.log(bookings);

    const data = {
      message: 'Reserva obtenida',
      bookings,
    };
    console.log(data);
    return data;
  }

  @Put('/:id')
  async updateBookings(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: BookingsDto,
  ) {
    const bookings = await this.bookingsService.updated(id, payload);
    const data = {
      message: 'Reserva actualizada',
      bookings,
    };
    return {
      data,
    };
  }

  @Delete('/:id')
  async deleteBookings(@Param('id') id: number) {
    const bookings = await this.bookingsService.deleteBookings(id);
    const data = {
      message: 'Reserva eliminada',
      bookings,
    };
    return {
      data,
    };
  }
}
