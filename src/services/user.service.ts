import { AppError } from '../errors';
import { userRepo } from '../data-source';
import { User } from '../entities';

export const createUser = async (data: User): Promise<User> =>
    await userRepo.save(userRepo.create(data));

export const userOrNotFoundById = async (id: string): Promise<User> => {
    const user: User | null = await userRepo.findOne({
        where: { id },
        relations: { address: true, ads: true, comments: true },
    });

    if (!user) throw new AppError('User not found', 404);

    return user;
};

export const userOrNotFoundByEmail = async (
    email: string
): Promise<User | null> => {
    const user: User | null = await userRepo.findOneBy({ email });

    if (!user) throw new AppError('User not found', 404);

    return user;
};

export const verifyUserExistsByEmail = async (email: string): Promise<void> => {
    const user = await userRepo.exist({ where: { email } });

    if (user) throw new AppError('Email already exists', 409);
};

export const updateUser = async (data: User): Promise<User> =>
    await userRepo.save(userRepo.create(data));

export const deleteUser = async (user: User): Promise<void> => {
    await userRepo.remove(user);
};
