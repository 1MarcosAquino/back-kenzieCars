import { AppError } from '../errors';
import { userRepo } from '../data-source';
import { User } from '../entities';

export const createUserService = async (data: User): Promise<User> =>
    await userRepo.save(userRepo.create(data));

export const retrieverUserService = async (id: string): Promise<User> => {
    const user: User | null = await userRepo.findOneBy({ id });

    if (!user) throw new AppError('User not found', 404);

    return user;
};
export const userOrNotFoundService = async (id: string): Promise<User> => {
    const user: User | null = await userRepo.findOne({
        where: { id },
        relations: { address: true, ads: true, comments: true },
    });

    if (!user) throw new AppError('User not found', 404);

    return user;
};

export const userOrNotFoundByEmailService = async (
    email: string
): Promise<User | null> => {
    const user: User | null = await userRepo.findOneBy({ email });

    if (!user) throw new AppError('User not found', 404);

    return user;
};

export const verifyUserExistsByEmailService = async (
    email: string
): Promise<void> => {
    const user = await userRepo.exist({ where: { email } });

    if (user) throw new AppError('Email already exists', 409);
};

export const deleteUserService = async (user: User): Promise<void> => {
    await userRepo.remove(user);
};
