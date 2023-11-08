import { BadRequestException, Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Bookings } from '../entities';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Bookings)
    private readonly bookingsRepository: Repository<Bookings>,
  ) {}

  async create(loadBookings: Bookings) {
    const bookings = await this.bookingsRepository.create(loadBookings);

    if (!loadBookings.roomType) {
      throw new Error('Room type is required.');
    }
    const data = {
      message: 'Bookings created',
      bookings,
    };
    return {
      data,
    };
  }

  async getReserva(): Promise<Bookings[]> {
    return await this.bookingsRepository.find({ order: { id: 'ASC' } });
  }

  async findAllBookingsId(id: number): Promise<Bookings[]> {
    const bookings = await this.bookingsRepository.find({
      where: {
        id,
      },
    });

    return bookings;
  }

  async updated(@Param('id') id: number, @Body() loadBookings: Bookings) {
    const updateBookings = await this.bookingsRepository.findOne({
      where: {
        id,
      },
    });

    if (!updateBookings) {
      throw new BadRequestException('Esa reserva no esta diponible');
    }

    if (!updateBookings.roomType && !updateBookings.checkIn) {
      throw new BadRequestException('Room type and check in is required.');
    }

    await this.bookingsRepository.update(id, loadBookings);
    const data = {
      message: 'Bookings updated',
      updateBookings,
    };
    return {
      data,
    };
  }

  async deleteBookings(id: number) {
    const bookings = await this.bookingsRepository.findOne({
      where: {
        id,
      },
    });

    if (!bookings) {
      throw new BadRequestException('Esa reserva no esta diponible');
    }

    await this.bookingsRepository.delete(id);
    return bookings;
  }
}
