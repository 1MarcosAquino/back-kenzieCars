import z from 'zod';

export const adsSchema = z.object({
    id: z.string(),
    name: z
        .string()
        .max(45)
        .transform((name) =>
            name
                .trim()
                .charAt(0)
                .toLocaleUpperCase()
                .concat(name.trim().slice(1))
        ),
    brand: z.string().max(15),
    year: z.number(),
    fuel: z.number(),
    value: z.number(),
    description: z.string(),
    miles: z.number(),
    color: z.string().max(30),
    model: z.string().max(20),
});

export const adsCreateSchema = adsSchema
    .omit({ id: true })
    .extend({ image: z.array(z.string()) });

export const adsUpdateSchema = adsSchema.partial();
