import { Module, forwardRef } from '@nestjs/common';
import { EmailService } from './email.service';
import { UsersService } from 'src/users/users.service';
import { UsersRepository } from 'src/users/users.repository';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [forwardRef(() => UsersModule)],
  providers: [EmailService, UsersService],
  exports: [EmailModule],
})
export class EmailModule {}
