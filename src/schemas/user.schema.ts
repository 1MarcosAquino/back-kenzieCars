import z from 'zod';

import { addressCreateSchema, addressSchema } from './address.schema';
import { announcementSchema } from './announcement.schema';
import { commentSchema } from './comment.Schema';

export const userSchema = z.object({
    id: z.string(),
    firstName: z
        .string()
        .max(45)
        .transform((firstName) =>
            firstName
                .trim()
                .charAt(0)
                .toLocaleUpperCase()
                .concat(firstName.trim().slice(1))
        ),
    lastName: z
        .string()
        .max(45)
        .transform((lastName) =>
            lastName
                .trim()
                .charAt(0)
                .toLocaleUpperCase()
                .concat(lastName.trim().slice(1))
        ),
    email: z.string().max(45).email(),
    announcer: z.boolean(),
    password: z.string().min(4).max(120),
});

export const userCreateSchema = userSchema
    .omit({
        id: true,
    })
    .extend({ address: addressCreateSchema });

export const userCreateResponseSchema = userSchema.omit({
    password: true,
});

export const userResponseSchema = userSchema
    .omit({
        password: true,
    })
    .extend({
        address: addressSchema,
        comments: z.array(commentSchema),
        ads: z.array(announcementSchema),
    });

export const loginSchema = userSchema.pick({
    password: true,
    email: true,
});

export const createToken = userSchema.pick({
    id: true,
    announcer: true,
});

export const userUpdateSchema = userSchema.omit({ id: true }).partial();

export const userUpdateResponseSchema = userSchema
    .omit({ password: true })
    .partial();
