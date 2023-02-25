import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShortReview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  star: number;

  @Column()
  novel_id: number;

  @Column()
  ans1: number;

  @Column()
  ans2: number;

  @Column()
  ans3: number;

  @Column()
  ans4: number;
}
