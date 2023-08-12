import z from 'zod';

export const addressSchema = z.object({
    id: z.string(),
    street: z.string().max(45),
    number: z.string().max(10),
    city: z.string().max(20),
    state: z.string().max(2),
});

export const addressSchemaRequest = addressSchema.omit({
    id: true,
});

export const addressSchemaUpdate = addressSchemaRequest.partial();
