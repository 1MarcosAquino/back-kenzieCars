import z from 'zod';
import schema from '../schemas';

export type TAddress = z.infer<typeof schema.addressSchema>;
export type TAddressResponse = z.infer<typeof schema.addressSchemaRequest>;
export type TAddressUpdate = z.infer<typeof schema.addressSchemaUpdate>;
