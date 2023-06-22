import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressRepository } from './repositories/address.repository';

@Injectable()
export class AddressService {
  constructor(private addressRepository: AddressRepository){}
  async create(createAddressDto: CreateAddressDto, user_id: string) {
    const address = await this.addressRepository.create(createAddressDto, user_id)

    return address
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }
}
