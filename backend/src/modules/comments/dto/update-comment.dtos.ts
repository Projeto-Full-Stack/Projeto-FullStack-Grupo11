import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';
import {
    IsNotEmpty,
    IsString,
    MaxLength 
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
    @ApiProperty({
        description: "Comentário para um anúncio",
        type: String,
        maxLength: 300
      })
    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    comment: string;
}