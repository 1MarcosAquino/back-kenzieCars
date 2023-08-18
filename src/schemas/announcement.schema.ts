import z from 'zod';

export const announcementSchema = z.object({
    id: z.string(),
    name: z.string().max(45),
    brand: z.string().max(15),
    year: z.number(),
    fuel: z.number(),
    value: z.number(),
    description: z.string(),
    miles: z.number(),
    color: z.string().max(30),
    model: z.string().max(20),
    image: z.array(z.string()),
});

export const announcementCreateSchema = announcementSchema.omit({ id: true });
export const announcementResponseSchema = announcementSchema.omit({ id: true });
export const announcementUpdateSchema = announcementSchema.omit({ id: true });
