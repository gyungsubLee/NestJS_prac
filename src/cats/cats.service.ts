import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  findAll(): string {
    try {
      return 'all cats';
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
