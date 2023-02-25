import { TypeOrmExModule } from './../db/typeorm-ex.module';
import { Module } from '@nestjs/common';
import { NovelController } from './novel.controller';
import { NovelService } from './novel.service';
import { NovelRepository } from './novel.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([NovelRepository])],
  controllers: [NovelController],
  providers: [NovelService],
})
export class NovelModule {}
