import { ApiProperty, PickType } from '@nestjs/swagger';
import { User } from 'src/users/user.entity';

export class CreateUserDto extends PickType(User, [
  'email',
  'name',
  'password',
] as const) {
  @ApiProperty({
    example: '3280199',
    description: 'id',
  })
  id: string;
}
