import { AppError } from '../errors';
import { addressRepo } from '../data-source';
import { Address } from '../entities';

export const addressOrNotFoundService = async (
    id: string
): Promise<Address | void> => {
    const address = await addressRepo.findOneBy({ id });

    if (!address) throw new AppError('Address not found', 404);

    return address;
};

export const createAddressService = async (data: Address): Promise<Address> =>
    await addressRepo.save(addressRepo.create(data));

export const deleteAddressService = async (data: Address): Promise<void> => {
    await addressRepo.remove(data);
};
