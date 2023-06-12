import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreateAnnouncementDto {
  @IsString()
  @IsNotEmpty()
  color: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  coverImage: string;

  @IsNumber()
  @IsNotEmpty()
  mileage: number;

  @IsBoolean()
  avaliable: boolean;
}
