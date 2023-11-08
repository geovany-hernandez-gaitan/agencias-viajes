import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from 'src/users/entities/user.entity';
import { Destino } from 'src/destino/entities/destino-entities';
import { Hotels } from 'src/hoteles/entities/hoteles.entities';
import { Vuelos } from 'src/vuelo/entities/vuelos-entities';
import { Bookings } from 'src/bookings/entities';

@Entity({
  name: 'comentarios',
})
export class Comentario {
  @PrimaryGeneratedColumn({
    type: 'int4',
  })
  id?: number;

  @Column()
  puntuacion?: number;

  @Column({ type: 'text' })
  comentario?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_publicacion?: Date;

  @Column({ default: true })
  aprobado?: boolean;

  @Column({ default: true })
  visible?: boolean;

  //relaciones con  otras tablas

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'users_id' })
  user?: User;

  @ManyToOne(() => Destino, { eager: true })
  @JoinColumn({ name: 'destino_id' })
  destino?: Destino;

  @ManyToOne(() => Hotels, { eager: true })
  @JoinColumn({ name: 'hotel_id' })
  hotel?: Hotels;

  @ManyToOne(() => Vuelos, { eager: true })
  @JoinColumn({ name: 'vuelo_id' })
  vuelo?: Vuelos;

  @ManyToOne(() => Bookings, { eager: true })
  @JoinColumn({ name: 'bookings_id' })
  booking?: Bookings;
}
