import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schemas/cat.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsRepository {
  constructor(
    @InjectModel(Cat.name)
    private readonly catModel: Model<Cat>,
  ) {}

  async findByEmail(email: string): Promise<Cat | null> {
    return this.catModel.findOne({ email }).exec();
  }

  async create(cat: Partial<Cat>): Promise<Cat> {
    return await this.catModel.create(cat);
  }
}
