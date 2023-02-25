import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Novel } from './novel.entity';
import { Genre } from './genre.entity';
import { Tag } from './tag.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  nickname: string;

  @Column({
    default:
      'https://images.pexels.com/photos/10041677/pexels-photo-10041677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  })
  profile_img: string;

  @Column({ nullable: true })
  sex: string;

  @Column({ nullable: true })
  ages: number;

  @Column({ nullable: false, default: 0 })
  points: number;

  @Column({ nullable: false, default: true })
  isActive: boolean;

  @Column()
  signupVerifyToken: string;

  @OneToMany((type) => Novel, (novel) => novel.id, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  scraps: Novel;

  @OneToMany((type) => Genre, (genre) => genre.id, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  genres: Genre[];

  @OneToMany((type) => Tag, (tag) => tag.id, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  prefer_tags: Tag[];

  @OneToMany((type) => Tag, (tag) => tag.id, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  hate_tags: Tag[];
}
