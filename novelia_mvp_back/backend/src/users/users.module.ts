import {
  MiddlewareConsumer,
  Module,
  NestModule,
  forwardRef,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { EmailService } from 'src/email/email.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users.schema';
import { UsersRepository } from './users.repository';
import { EmailModule } from 'src/email/email.module';
import { LoggerMiddleware } from 'src/common/logger/logger.middleware';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/entity/user.entity';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    TypeOrmModule.forFeature([User]),
    forwardRef(() => EmailModule),
    forwardRef(() => AuthModule),
  ],
  //  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, EmailService, UsersRepository],
  controllers: [UsersController],
  exports: [UsersService, UsersRepository],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
