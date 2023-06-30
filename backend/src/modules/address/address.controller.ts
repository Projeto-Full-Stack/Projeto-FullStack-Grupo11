import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { JwtAuthGuard } from '../auth/jawt.auth.guard';
import { ApiTags, ApiCreatedResponse, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post(':user_id')
  @ApiCreatedResponse({ description: 'Created Succesfully', schema: { example: {
      "id": "a1a975f9-4bfd-4c1e-80de-6c852025714f",
      "street": "Rua teste address",
      "state": "Estado de teste",
      "city": "Cidade do teste",
      "number": 535,
      "complement": null,
      "cep": "1234567",
      "userId": "ff489927-055c-4c1e-ba33-9f11a032dcb0"
    } 
  }})
  create(@Body() createAddressDto: CreateAddressDto, @Param('user_id') user_id: string) {
    return this.addressService.create(createAddressDto, user_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiResponse({ status: 200, schema: { example: {
      "id": "a1a975f9-4bfd-4c1e-80de-6c852025714f",
      "street": "Rua teste address - 2",
      "state": "Estado de teste",
      "city": "Cidade do teste",
      "number": 535,
      "complement": null,
      "cep": "1234567",
      "userId": "ff489927-055c-4c1e-ba33-9f11a032dcb0"
    } 
  }})
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto, @Request() req: any) {
    const findAddress = await this.addressService.findOne(id)
    if (findAddress.userId !== req.user.id) throw new UnauthorizedException()

    return this.addressService.update(id, updateAddressDto, req.user_id);
  }
}
