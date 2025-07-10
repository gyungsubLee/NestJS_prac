import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // 다른 모듈에서 CatsService를 사용할 수 있도록 export
})
export class CatsModule {}
