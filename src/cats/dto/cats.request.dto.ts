import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CatRequestDto {
  @ApiProperty({
    example: 'test@email.com',
    description: 'email',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'password',
    required: true,
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'Tom',
    description: 'name',
    required: true,
  })
  @IsNotEmpty()
  name: string;
}
