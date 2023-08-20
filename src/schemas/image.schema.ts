import z from 'zod';
import { adsSchema } from './ads.schema';

const imageSchema = z.object({ id: z.string(), path: z.string() });

export const imageUpdateSchema = imageSchema.omit({ id: true });

export const imageCreateSchema = imageUpdateSchema.extend({ ads: adsSchema });
