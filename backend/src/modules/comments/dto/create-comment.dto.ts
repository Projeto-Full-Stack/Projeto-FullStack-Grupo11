import {
    IsDate,
    IsNotEmpty,
    IsString,
    MaxLength 
} from "class-validator";

export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    comment: string;
}