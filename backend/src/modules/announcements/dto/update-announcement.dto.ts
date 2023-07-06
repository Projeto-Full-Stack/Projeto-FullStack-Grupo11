import { PartialType } from '@nestjs/mapped-types';
import { CreateAnnouncementDto } from './create-announcement.dto';
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist';

export class UpdateAnnouncementDto extends PartialType(CreateAnnouncementDto) {      
    @ApiProperty({
        description: "Cor do carro, informada pelo usuário",
        type: String,
        required: false
    })
    @IsString()
    @IsNotEmpty()
    color: string;

    @ApiProperty({
        description: "preço do carro, informada pelo usuário",
        type: String,
        required: false
    })
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @ApiProperty({
        description: "Descrição do carro feita pelo usuário anunciante",
        type: String,
        required: false
    })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({
        description: "Imagem de capa para ser utilizada no anúncio",
        type: String,
        required: false
      })
    @IsString()
    @IsNotEmpty()
    coverImage: string;

    @ApiProperty({
        description: "Quantos KMs o carro já andou antes da venda, informada pelo usuário",
        type: String,
        required: false
    })
    @IsNumber()
    @IsNotEmpty()
    mileage: number;

    @ApiProperty({
        description: "Disponibilidade do carro para venda",
        type: String,
        required: false
    })
    @IsBoolean()
    avaliable: boolean;
}
