import { NovelService } from './novel.service';
import { Controller, Get } from '@nestjs/common';

@Controller('novel')
export class NovelController {
  constructor(private novelService: NovelService) {}
  @Get('/all')
  async getAllNovel() {
    return await this.novelService.getAllNovel();
  }
}
