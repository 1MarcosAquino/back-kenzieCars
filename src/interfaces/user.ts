import z from 'zod';
import schema from '../schemas';

export type TUser = z.infer<typeof schema.userSchema>;
export type TUserResponse = z.infer<typeof schema.userResponse>;
export type TUserUpdate = z.infer<typeof schema.userUpdate>;
export type TCreateToken = z.infer<typeof schema.createToken>;
