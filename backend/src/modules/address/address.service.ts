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

  async findOne(id: string) {
    const address = await this.addressRepository.findOne(id)

    return address
  }

  async update(id: string, updateAddressDto: UpdateAddressDto, user_id: string) {
    const updated = await this.addressRepository.update(id, updateAddressDto, user_id)

    return updated
  }
}
