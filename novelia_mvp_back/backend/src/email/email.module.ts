import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { UsersService } from 'src/users/users.service';

@Module({
  providers: [EmailService, UsersService],
})
export class EmailModule {}
