import z from 'zod';
import schema from '../schemas';

export type TimageCreate = z.infer<typeof schema.imageCreateSchema>;
