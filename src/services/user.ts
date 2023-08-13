import { AppError } from '../errors';
import { userRepo } from '../data-source';
import { User } from '../entities';
import { TUser, TUserResponse, TUserUpdate } from '../interfaces';
import schema from '../schemas';

export const userOrNotFoundById = async (id: string): Promise<User | null> => {
    const user: User | null = await userRepo.findOneBy({ id });

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

export const createUser = async (data: User): Promise<TUserResponse> => {
    const newUser = await userRepo.save(userRepo.create(data));

    return schema.userResSchema.parse(newUser);
};

export const updateUser = async (data: User): Promise<TUserUpdate> => {
    const newUser = await userRepo.save(userRepo.create(data));

    return schema.userUpdateSchema.parse(newUser);
};

export const deleteUser = async (id: string): Promise<void> => {
    const user: User | null = await userOrNotFoundById(id);
    await userRepo.remove(user!);
};
