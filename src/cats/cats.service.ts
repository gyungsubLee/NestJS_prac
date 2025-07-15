import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CatRequestDto } from './dto/cats.request.dto';
import { Model } from 'mongoose';
import { Cat } from './schemas/cat.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { CatsRepository } from './cats.repository';

@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) {}

  async signUp(reqDto: CatRequestDto): Promise<Cat['readOnlyData']> {
    const { email, password, name } = reqDto;
    const isCatExists = await this.catsRepository.findByEmail(email);

    if (isCatExists) {
      throw new UnauthorizedException('Cat with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const cat = await this.catsRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return cat.readOnlyData;
  }
}
