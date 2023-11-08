import { User } from 'src/users/entities/user.entity';
import { Entity, ManyToMany, ManyToOne } from 'typeorm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity(
  { name: 'hotels' }, // table name
)
export class Hotels {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int4',
  })
  id?: number;

  @Column({
    name: 'name_hotels',
    type: 'varchar',
  })
  name?: string;

  @Column({
    name: 'description',
    type: 'varchar',
    length: 100,
  })
  description?: string;

  @Column({
    name: 'servises',
    type: 'varchar',
    nullable: true,
  })
  servises?: string;

  @Column({
    name: 'address',
    type: 'varchar',
  })
  address?: string;

  @Column({
    name: 'phone',
    type: 'numeric',
  })
  phone?: number;

  @ManyToOne(() => User, (user) => user.hotel)
  user: User[];
}
