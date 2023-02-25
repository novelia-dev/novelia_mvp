import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';
import { Novel } from './novel.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => User, (user) => user.prefer_tags)
  prefer_users: User;

  @ManyToOne((type) => User, (user) => user.prefer_tags)
  hate_users: User;

  @ManyToOne((type) => Novel, (novel) => novel.tags)
  novels: Novel;
}
