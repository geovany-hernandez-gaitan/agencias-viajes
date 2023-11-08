import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { VuelosDto } from '../dtos/vuelos-dto';
import { Vuelos } from '../entities/vuelos-entities';

@Injectable()
export class DestinoService {
  constructor(
    @InjectRepository(Vuelos)
    private readonly vueloRepository: Repository<Vuelos>,
  ) {}

  async created(payload: VuelosDto) {
    const vuelos = await this.vueloRepository.create(payload);
    return await this.vueloRepository.save(vuelos);
  }

  async getVuelo(): Promise<Vuelos[]> {
    return await this.vueloRepository.find({ order: { id: 'ASC' } });
  }

  async getVueloById(id: number): Promise<Vuelos> {
    const vuelos = await this.vueloRepository.findOne({
      where: { id },
    });
    return vuelos;
  }

  async updated(id: number, payload: VuelosDto): Promise<Vuelos> {
    const vuelos = await this.vueloRepository.findOne({
      where: { id: id },
    });
    this.vueloRepository.merge(vuelos, payload);
    return await this.vueloRepository.save(vuelos);
  }

  async delete(id: number): Promise<Vuelos> {
    const vuelos = await this.vueloRepository.findOne({
      where: { id: id },
    });
    return await this.vueloRepository.remove(vuelos);
  }
}
