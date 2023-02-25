import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Tag } from './tag.entity';

@Entity()
export class Novel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  content: string;

  @Column({ type: 'timestamp' })
  start_date: Date;

  @Column({ default: 0 })
  multiple_done: number;

  @Column({ default: 0 })
  short_done: number;

  @OneToMany((type) => Tag, (tag) => tag.novels, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  tags: Tag[];
}
