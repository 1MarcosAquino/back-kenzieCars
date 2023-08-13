import z from 'zod';

import { addressSchemaRequest } from './address';

export const userSchema = z.object({
    id: z.string(),
    firstName: z.string().max(45),
    lastName: z.string().max(45),
    email: z.string().max(45).email(),
    announcer: z.boolean(),
    password: z.string().min(4).max(120),
    address: addressSchemaRequest,
});

export const userReqSchema = userSchema.omit({
    id: true,
});

export const loginSchema = userSchema.pick({
    password: true,
    email: true,
});

export const createToken = userSchema.pick({
    id: true,
    announcer: true,
});

export const userResSchema = userSchema.omit({
    password: true,
});

export const userUpdateSchema = userSchema.omit({ id: true }).partial();
