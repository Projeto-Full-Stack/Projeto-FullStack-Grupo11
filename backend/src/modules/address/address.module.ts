import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { AddressRepository } from './repositories/address.repository';
import { PrismaService } from 'src/database/prisma.service';
import { AddressPrismaRepository } from './repositories/prisma/prisma.address.repository';

@Module({
  controllers: [AddressController],
  providers: [AddressService, PrismaService, {
    provide: AddressRepository,
    useClass: AddressPrismaRepository
  }]
})
export class AddressModule {}
