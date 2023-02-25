import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LongReview } from 'src/entity/longReview.entity';
import { ShortReview } from 'src/entity/shortReview.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LongReview, ShortReview])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
