import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LongReview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  star: number;

  @Column()
  novel_id: number;

  @Column()
  good_content: string;

  @Column()
  bad_content: string;
}
