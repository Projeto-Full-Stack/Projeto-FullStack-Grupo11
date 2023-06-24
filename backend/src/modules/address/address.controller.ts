import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { JwtAuthGuard } from '../auth/jawt.auth.guard';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post(':user_id')
  create(@Body() createAddressDto: CreateAddressDto, @Param('user_id') user_id: string) {
    return this.addressService.create(createAddressDto, user_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto, @Request() req: any) {
    const findAddress = await this.addressService.findOne(id)
    if (findAddress.userId !== req.user.id) throw new UnauthorizedException()

    return this.addressService.update(id, updateAddressDto, req.user_id);
  }
}
