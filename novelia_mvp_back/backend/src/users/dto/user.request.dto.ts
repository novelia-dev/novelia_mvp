import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { User } from '../users.schema';

export class UserRequestDto extends PickType(User, [
  'email',
  'name',
  'password',
  'signupVerifyToken',
] as const) {}
