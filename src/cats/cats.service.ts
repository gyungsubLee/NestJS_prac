import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CatRequestDto } from './dto/CatRequestDto';
import { Model } from 'mongoose';
import { Cat } from './schemas/cat.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat.name)
    private readonly catModel,
  ) {}

  async signUp(reqDto: CatRequestDto): Promise<Cat> {
    const { email, password, name } = reqDto;
    const isCatExists = await this.catModel.exists({ email });

    if (isCatExists) {
      throw new UnauthorizedException('Cat with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const cat = await this.catModel.create({
      email,
      name,
      password: hashedPassword,
    });

    return cat.readOnlyData;
  }
}
