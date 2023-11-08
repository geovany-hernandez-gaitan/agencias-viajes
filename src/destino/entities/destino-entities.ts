// import { Users } from 'src/modules/auth/entities/users_entities';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from 'src/users/entities/user.entity';

@Entity({ name: 'destinos' })
export class Destino {
  @PrimaryGeneratedColumn({ type: 'int4', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'nombre', length: 50 })
  nombre: string;

  @Column({ type: 'varchar', name: 'descripcion', length: 100 })
  descripcion: string;

  @Column({ type: 'varchar', name: 'imagen', length: 100 })
  imagen?: string;

  @Column({ type: 'float', name: 'precio' })
  precio: number;

  @Column({ type: 'float', name: 'descuento' })
  descuento: number;

  @Column({ type: 'float', name: 'precio_final' })
  precioFinal: number;

  @ManyToOne(() => User, (users: User) => users.destinos)
  @JoinTable({ name: 'users_id' })
  user: User[];

  @ManyToOne(() => User, (user) => user.bookings, {})
  @JoinTable({ name: 'users_id' })
  users?: User[];
}
