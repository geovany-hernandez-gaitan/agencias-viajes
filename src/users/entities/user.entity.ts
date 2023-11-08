import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserImage } from './user-image.entity';

import { Bookings } from 'src/bookings/entities';
import { Destino } from 'src/destino/entities/destino-entities';
import { Comentario } from 'src/comentarios/entities/comentarios-entities';
import { Hotels } from 'src/hoteles/entities/hoteles.entities';
import { Vuelos } from 'src/vuelo/entities/vuelos-entities';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  sexo: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'text', array: true, default: ['user'] })
  roles: string[];

  @OneToMany(() => UserImage, (userImage) => userImage.user, {
    cascade: true,
  })
  images?: UserImage[];

  @OneToMany(() => Comentario, (comentario) => comentario.user, {
    onDelete: 'CASCADE',
  })
  comentario: Comentario[];

  @OneToMany(() => Bookings, (bookings) => bookings.users, {
    cascade: true,
    eager: true,
  })
  @JoinTable({ name: 'users_id' })
  bookings: Bookings[];

  @OneToMany(() => Destino, (destinos) => destinos.users, {
    cascade: true,
    eager: true,
  })
  @JoinTable({ name: 'user_id' })
  destinos: Destino[];

  @OneToMany(() => Hotels, (hotels) => hotels.user, {
    cascade: true,
    eager: true,
  })
  hotel: Hotels[];

  @OneToMany(() => Vuelos, (vuelos) => vuelos.user, {
    cascade: true,
    eager: true,
  })
  vuelo: Vuelos[];
}
