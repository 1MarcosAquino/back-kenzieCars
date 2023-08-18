import z from 'zod';

export const commentSchema = z.object({
    id: z.string(),
    comment: z.string(),
    userId: z.string(),
    adsId: z.string(),
});
