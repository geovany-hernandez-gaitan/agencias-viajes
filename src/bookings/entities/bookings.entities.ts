import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from 'src/users/entities/user.entity';

@Entity({
  name: 'bookings',
})
export class Bookings {
  @PrimaryGeneratedColumn({
    type: 'int4',
    name: 'id',
  })
  id?: number;
  @Column({
    type: 'timestamp',
    name: 'initial_date',
  })
  initialDate?: Date;

  @Column({
    type: 'timestamp',
    name: 'final_date',
  })
  finalDate?: Date;

  @Column({
    type: 'int4',
    name: 'total',
  })
  total?: number;

  @Column({
    type: 'int4',
    name: 'peoples_number',
  })
  peoplesNumber?: number;

  @Column({
    type: 'varchar',
    name: 'room_type',
  })
  roomType?: string;

  @Column({
    type: 'timestamp',
    name: 'check_in',
    nullable: true,
  })
  checkIn?: Date;

  @ManyToOne(() => User, (user) => user.bookings, {})
  @JoinTable({ name: 'users_id' })
  users?: User[];
}
