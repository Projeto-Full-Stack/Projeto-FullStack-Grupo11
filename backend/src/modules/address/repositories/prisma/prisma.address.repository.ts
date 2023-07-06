import { Injectable } from "@nestjs/common";
import { AddressRepository } from "../address.repository";
import { PrismaService } from "src/database/prisma.service";
import { CreateAddressDto } from "../../dto/create-address.dto";
import { Address } from "../../entities/address.entity";
import { plainToInstance } from "class-transformer";
import { UpdateAddressDto } from "../../dto/update-address.dto";


@Injectable()
export class AddressPrismaRepository implements AddressRepository {
    constructor(private prisma: PrismaService) {}

    async create(data: CreateAddressDto, user_id: string): Promise<Address> {
        const address = new Address()
        Object.assign(address, {
            ...data,
            userId: user_id
        })

        const newAddress = await this.prisma.address.create({
            data: {...address}
        })

        return plainToInstance(Address, newAddress)
    }

    async findOne(id: string): Promise<Address> {
        const findAddress = await this.prisma.address.findUnique({ where: { id }})
        return plainToInstance(Address, findAddress)
    }

    async update(id: string, content: UpdateAddressDto, user_id: string): Promise<Address> {
        const updateAddress = await this.prisma.address.update({
            where: {
                id
            },
            data: {...content}
        })
        
        return plainToInstance(Address, updateAddress)
    }

}