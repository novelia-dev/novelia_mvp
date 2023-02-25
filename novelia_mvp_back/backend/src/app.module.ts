import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import configEmail from './config/email';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';
import mongoose from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { NovelModule } from './novel/novel.module';
import { TagModule } from './tag/tag.module';
import { ReviewModule } from './review/review.module';
import { User } from './entity/user.entity';
import { Novel } from './entity/novel.entity';
import { Tag } from './entity/tag.entity';
import { Genre } from './entity/genre.entity';
import { LongReview } from './entity/longReview.entity';
import { ShortReview } from './entity/shortReview.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configEmail],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.LIGHTSAIL_DB_ENDPOINT,
      port: 3306,
      username: process.env.LIGHTSAIL_DB_USERNAME,
      password: process.env.LIGHTSAIL_DB_PASSWORD,
      database: 'test',
      entities: [User, Novel, Tag, Genre, LongReview, ShortReview],
      synchronize: true, //배포단계에서는 사용하지 말기
      autoLoadEntities: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UsersModule,
    EmailModule,
    AuthModule,
    NovelModule,
    TagModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;
  configure(consumer: MiddlewareConsumer) {
    mongoose.set('debug', this.isDev);
  }
}
