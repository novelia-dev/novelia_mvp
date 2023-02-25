import { User } from '../users.schema';
import { ApiProperty, PickType } from '@nestjs/swagger';

export class ReadOnlyUserDto extends PickType(User, [
  'email',
  'name',
] as const) {
  @ApiProperty({
    example: '3280199',
    description: 'id',
  })
  id: string;
}
