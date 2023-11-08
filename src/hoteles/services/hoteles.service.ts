import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { Hotels } from '../entities/hoteles.entities';
import { HotelsDto } from '../dtos/hoteles.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HotelesService {
  constructor(
    @InjectRepository(Hotels)
    private readonly hotelsRepository: Repository<Hotels>,
  ) {}

  async create(loadHotels: HotelsDto) {
    const hotel = await this.hotelsRepository.create(loadHotels);
    await this.hotelsRepository.save(hotel);
    return hotel;
  }

  async findAll(): Promise<Hotels[]> {
    const hotels = await this.hotelsRepository.find({
      order: {
        id: 'ASC',
      },
    });
    return hotels;
  }

  async getHotelsId(id: number): Promise<Hotels[]> {
    const hotels = await this.hotelsRepository.find({
      where: {
        id: id,
      },
    });
    return hotels;
  }

  async updateHotels(id: number, loadHotels: HotelsDto): Promise<Hotels> {
    const hotel = await this.hotelsRepository.findOne({
      where: {
        id: id,
      },
    });
    this.hotelsRepository.merge(hotel, loadHotels);
    return this.hotelsRepository.save(hotel);
  }

  async deleteHotels(id: number): Promise<any> {
    const hotel = await this.hotelsRepository.findOne({
      where: {
        id: id,
      },
    });
    return this.hotelsRepository.remove(hotel);
  }
}
