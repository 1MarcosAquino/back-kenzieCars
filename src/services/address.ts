import { AppError } from '../errors';
import { adressRepo } from '../data-source';
import { Address } from '../entities';
import { TAddress, TAddressResponse, TAddressUpdate } from '../interfaces';
import schema from '../schemas';

export const addressOrNotFoundById = async (
    id: string
): Promise<Address | null> => {
    const user: Address | null = await adressRepo.findOneBy({ id });

    if (!user) throw new AppError('Address not found', 404);

    return user;
};

export const createAddress = async (
    data: Address
): Promise<TAddressResponse> => {
    const newAddress = await adressRepo.save(adressRepo.create(data));

    return schema.addressSchema.parse(newAddress);
};

export const updateAddress = async (data: Address): Promise<TAddressUpdate> => {
    const newAddress = await adressRepo.save(adressRepo.create(data));

    return schema.addressSchemaUpdate.parse(newAddress);
};

export const deleteAddress = async (id: string): Promise<void> => {
    const user: Address | null = await addressOrNotFoundById(id);
    await adressRepo.remove(user!);
};
