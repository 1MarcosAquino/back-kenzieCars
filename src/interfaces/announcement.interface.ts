import z from 'zod';
import schema from '../schemas';

export type TAnnouncement = z.infer<typeof schema.announcementSchema>;
export type TAnnouncementResponse = z.infer<
    typeof schema.announcementSchemaResponse
>;
export type TAnnouncementUpdate = z.infer<
    typeof schema.announcementSchemaUpdate
>;
export type TAnnouncementRequest = z.infer<
    typeof schema.announcementSchemaRequest
>;
