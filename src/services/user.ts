import { AppError } from '../errors';
import { userRepo } from '../data-source';
import { User } from '../entities';

export const userOrNotFoundByEmail = async (
    email: string
): Promise<User | null> => {
    const user: User | null = await userRepo.findOneBy({ email });

    if (!user) throw new AppError('User not found', 404);

    return user;
};
