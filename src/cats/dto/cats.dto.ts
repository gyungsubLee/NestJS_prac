import { ApiProperty } from '@nestjs/swagger';

export class readOnlyCatData {
  @ApiProperty({
    example: '34245155',
    description: 'id',
  })
  id: string;

  @ApiProperty({
    example: 'test@email.com',
    description: 'email',
  })
  email: string;

  @ApiProperty({
    example: 'test',
    description: 'name',
  })
  imgUrl: string;
}
