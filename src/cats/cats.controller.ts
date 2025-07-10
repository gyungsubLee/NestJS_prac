import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // 엔드포인트: /cats/
  @Get()
  getAllCats(): string {
    return 'all cats';
  }

  // 엔드포인트: /cats/:id
  @Get(':id')
  getOneCat(): string {
    return 'one cat';
  }

  // 엔드포인트: /cats/
  @Post()
  createlCat(): string {
    return 'create cat';
  }

  // 엔드포인트: /cats/:id
  @Put(':id')
  updaateCat(): string {
    return 'update cat';
  }

  // 엔드포인트: /cats/:id
  @Patch(':id')
  updatePartialCat(): string {
    return 'update partial cat';
  }

  // 엔드포인트: /cats/:id
  @Delete(':id')
  deleteCat(): string {
    return 'delete cat';
  }
}
