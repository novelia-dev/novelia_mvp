import { NovelRepository } from './novel.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Novel } from 'src/entity/novel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NovelService {
  constructor(
    // @InjectRepository(Novel)
    // private readonly novelRepository: Repository<Novel>,
    private readonly novelRepository: NovelRepository,
  ) {}

  async getAllNovel() {
    const novels = await this.novelRepository.find();
    return novels;
  }

  async getNovelFromId(id: string) {
    const id2 = parseInt(id);
    const novel = await this.novelRepository.findOneBy({ id: id2 });
    return novel;
  }
}
