import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class ResetTokenDto {
  @ApiProperty({
    description: "Token para verificar qual usuário está recuperando a senha, o tokén é gerado apenas quando é pedido a recuperação de senha",
    type: String
  })
  @IsString()
  resetToken: string;
}
