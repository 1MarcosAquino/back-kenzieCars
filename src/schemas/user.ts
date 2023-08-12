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

export const userResquest = userSchema.omit({
    id: true,
    createdAt: true,
    contacts: true,
});

export const userResponse = userSchema.omit({
    password: true,
    contacts: true,
});
export const userResponseRetriever = userSchema.omit({
    password: true,
});

export const userLogin = userSchema
    .pick({
        password: true,
        email: true,
    })
    .required();

export const createToken = userSchema.pick({
    id: true,
    email: true,
});

export const userUpdate = userSchema
    .omit({ id: true, createdAt: true, contacts: true })
    .partial();
