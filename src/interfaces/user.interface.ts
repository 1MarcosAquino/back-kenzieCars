import z from 'zod';
import schema from '../schemas';

export type TUserResponse = z.infer<typeof schema.userResponseSchema>;
export type TUserUpdate = z.infer<typeof schema.userUpdateSchema>;
export type TCreateToken = z.infer<typeof schema.createToken>;
