import z from 'zod';
import schema from '../schemas';

export type TUser = z.infer<typeof schema.userSchema>;
export type TUserResponse = z.infer<typeof schema.userResSchema>;
export type TUserUpdate = z.infer<typeof schema.userUpdateSchema>;
export type TCreateToken = z.infer<typeof schema.createToken>;
