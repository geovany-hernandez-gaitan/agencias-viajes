import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'vuelos' })
export class Vuelos {
  @PrimaryGeneratedColumn({ type: 'int4', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'aerolinea', length: 100 })
  aerolinea: string;

  @Column({ type: 'varchar', name: 'origen', length: 100 })
  origen: string;

  @Column({ type: 'numeric', name: 'fecha_salida' })
  fecha_salida: number;

  @Column({ type: 'numeric', name: 'fecha_llegada' })
  fecha_llegada: number;

  @Column({ type: 'float', name: 'duracion' })
  duracion: number;

  @Column({ type: 'float', name: 'precio_final' })
  precio: number;

  @ManyToMany(() => User, (user) => user.vuelo)
  user: User[];
}
