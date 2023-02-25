import { CustomRepository } from 'src/db/typeorm-ex.decorator';
import { Novel } from 'src/entity/novel.entity';
import { Repository } from 'typeorm';

@CustomRepository(Novel)
export class NovelRepository extends Repository<Novel> {}
