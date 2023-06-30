import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class CreateImageDto {
  @ApiProperty({
    description: "Fotos do carro anunciado",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  imageUrl: string;
}
