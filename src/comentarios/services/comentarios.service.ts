import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comentario } from '../entities/comentarios-entities';
import { Repository } from 'typeorm';

@Injectable()
export class ComentariosService {
  constructor(
    @InjectRepository(Comentario)
    private readonly comentRepository: Repository<Comentario>,
  ) {}

  async create(payload: Comentario) {
    const comment = await this.comentRepository.save(payload);

    const data = {
      message: 'Comentario created',
      comment,
    };
    return {
      data,
    };
  }

  async findAllComents(): Promise<Comentario[]> {
    const comment = await this.comentRepository.find({
      order: {
        id: 'ASC',
      },
    });

    return comment;
  }

  async findAllcommentById(id: number): Promise<Comentario[]> {
    const comment = await this.comentRepository.find({
      where: {
        id: id,
      },
    });

    return comment;
  }

  async updateComment(id: number, payload: Comentario) {
    const updateComment = await this.comentRepository.findOne({
      where: {
        id,
      },
    });

    await this.comentRepository.update(id, payload);
    const data = {
      message: 'Comentario updated',
      updateComment,
    };
    return {
      data,
    };
  }

  async deletedCommnet(id: number) {
    const comment = await this.comentRepository.findOne({
      where: {
        id,
      },
    });

    await this.comentRepository.delete(id);
    return comment;
  }
}
