import { Module } from '@nestjs/common';
import { BookingsController } from './controller/bookings.controller';
import { BookingsService } from './services/bookings.service';
import { type } from 'os';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookings } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Bookings])],
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class BookingsModule {}
