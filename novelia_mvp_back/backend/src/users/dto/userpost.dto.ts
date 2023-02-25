import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { User } from '../users.schema';

export class UserPostDto extends PickType(User, [
  'email',
  'name',
  'password',
] as const) {}
