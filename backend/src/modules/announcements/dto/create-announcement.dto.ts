/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreateAnnouncementDto {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  fuel: string;

  @IsNumber()
  @IsNotEmpty()
  fipe: number;

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
