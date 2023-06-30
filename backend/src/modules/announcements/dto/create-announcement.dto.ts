/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateAnnouncementDto {
  @ApiProperty({
    description: "Marca do carro, todos os modelos são obtidos pela api 'https://kenzie-kars.herokuapp.com/cars'",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty({
    description: "Modelo do carro, todos os modelos são obtidos pela api 'https://kenzie-kars.herokuapp.com/cars?brand=[marca]'",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty({
    description: "Modelo do carro, informação adquirida quando buscada o modelo do carro",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  year: string;

  @ApiProperty({
    description: "Modelo do carro, informação adquirida quando buscada o modelo do carro",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  fuel: string;

  @ApiProperty({
    description: "Modelo do carro, informação adquirida quando buscada o modelo do carro",
    type: String
  })
  @IsNumber()
  @IsNotEmpty()
  fipe: number;

  @ApiProperty({
    description: "Cor do carro, informada pelo usuário",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({
    description: "Preço do carro, informada pelo usuário",
    type: String
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    description: "Descrição do carro feita pelo usuário anunciante",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: "Imagem de capa para ser utilizada no anúncio",
    type: String
  })
  @IsString()
  @IsNotEmpty()
  coverImage: string;

  @ApiProperty({
    description: "Quantos KMs o carro já andou antes da venda, informada pelo usuário",
    type: String
  })
  @IsNumber()
  @IsNotEmpty()
  mileage: number;

  @ApiProperty({
    description: "Disponibilidade do carro para venda",
    type: String
  })
  @IsBoolean()
  avaliable: boolean;
}
