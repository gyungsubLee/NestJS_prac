import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../schemas/cat.schema';

export class readOnlyCatData extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '68738166cfb95410ad3d24f1',
    description: 'id',
    required: true,
  })
  id: string;
}
