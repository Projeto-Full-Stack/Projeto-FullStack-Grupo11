import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger/dist";

export class CreateAddressDto {
    @ApiProperty({
        description: "Nome da rua",
        type: String,
        maxLength: 100
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    street: string;

    @ApiProperty({
        description: "Nome do estado",
        type: String,
        maxLength: 30,
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    state: string;

    @ApiProperty({
        description: "Nome da cidade",
        type: String,
        maxLength: 30
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    city: string;

    @ApiProperty({
        description: "Número da casa",
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    number: number;

    @ApiProperty({
        description: "Informação extra da sua casa, como por exemplo: número da porta caso more em apartamento",
        type: String,
        maxLength: 30,
        required: false
    })
    @IsString()
    @MaxLength(30)
    @IsOptional()
    complement: string;

    @ApiProperty({
        description: "CEP do seu bairro",
        type: String,
        maxLength: 9
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(9)
    cep: string;
}
