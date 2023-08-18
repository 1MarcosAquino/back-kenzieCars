import z from 'zod';
import schema from '../schemas';

export type TAds = z.infer<typeof schema.announcementSchema>;
export type TAdsResponse = z.infer<typeof schema.announcementResponseSchema>;
export type TAdsUpdate = z.infer<typeof schema.announcementUpdateSchema>;
export type TAdsRequest = z.infer<typeof schema.announcementCreateSchema>;
