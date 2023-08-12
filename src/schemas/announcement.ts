import z from 'zod';

export const announcementSchema = z.object({
    id: z.string(),
    name: z.string().max(45),
    brand: z.string().max(15),
    image: z.string().max(250),
    year: z.number().min(4).max(4),
    fuel: z.string().max(15),
    description: z.string().max(250),
    color: z.string().max(10),
    km: z.number(),
    price: z.number(),
});

export const announcementSchemaRequest = announcementSchema.omit({ id: true });
