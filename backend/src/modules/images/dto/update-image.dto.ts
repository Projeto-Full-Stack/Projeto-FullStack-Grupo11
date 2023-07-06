import { PartialType } from '@nestjs/mapped-types';
import { CreateImageDto } from './create-image.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class UpdateImageDto extends PartialType(CreateImageDto) {
    @ApiProperty({
        description: "Fotos do carro anunciado",
        type: String
      })
      @IsString()
      @IsNotEmpty()
      imageUrl: string;
}
