import { AppError } from '../errors';
import { addressRepo } from '../data-source';
import { Address } from '../entities';
import { TAddressResponse, TAddressUpdate } from '../interfaces';
import schema from '../schemas';

export const addressOrNotFoundById = async (id: string): Promise<any> => {
    const address = await addressRepo.findOneBy({ id });

    if (!address) throw new AppError('Address not found', 404);

    return address;
};

export const createAddress = async (data: Address): Promise<TAddressResponse> =>
    await addressRepo.save(addressRepo.create(data));

export const updateAddress = async (data: Address): Promise<TAddressUpdate> => {
    const address = await addressRepo.save(addressRepo.create(data));

    return schema.addressSchemaUpdate.parse(address);
};

export const deleteAddress = async (address: Address): Promise<void> => {
    await addressRepo.remove(address);
};
