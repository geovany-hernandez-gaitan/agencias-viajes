import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Destino } from '../entities/destino-entities';
import { InjectRepository } from '@nestjs/typeorm';
import { DestinoDto } from '../dtos/destino-dto';

@Injectable()
export class DestinoService {
  constructor(
    @InjectRepository(Destino)
    private readonly destinoRepository: Repository<Destino>,
  ) {}

  async created(payload: DestinoDto) {
    const destino = await this.destinoRepository.create(payload);
    return await this.destinoRepository.save(destino);
  }

  async getDestino(): Promise<Destino[]> {
    return await this.destinoRepository.find({ order: { id: 'ASC' } });
  }

  async getDestinoId(id: number): Promise<Destino> {
    const destino = await this.destinoRepository.findOne({
      where: { id },
    });
    return destino;
  }

  async updated(id: number, payload: DestinoDto): Promise<Destino> {
    const destino = await this.destinoRepository.findOne({
      where: { id: id },
    });
    this.destinoRepository.merge(destino, payload);
    return await this.destinoRepository.save(destino);
  }

  async delete(id: number): Promise<Destino> {
    const destino = await this.destinoRepository.findOne({
      where: { id: id },
    });
    return await this.destinoRepository.remove(destino);
  }
}
