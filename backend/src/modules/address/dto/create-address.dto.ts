import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateAddressDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    address: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    state: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    city: string;

    @IsNumber()
    @IsNotEmpty()
    number: number;

    @IsString()
    @MaxLength(30)
    @IsOptional()
    complement: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(9)
    cep: string;
}
