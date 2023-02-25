import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LongReview } from 'src/entity/longReview.entity';
import { ShortReview } from 'src/entity/shortReview.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ShortReview)
    private readonly shortReviewRepository: Repository<ShortReview>,

    @InjectRepository(LongReview)
    private readonly longReviewRepository: Repository<LongReview>,
  ) {}
}
