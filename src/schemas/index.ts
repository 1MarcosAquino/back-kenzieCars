import {
    userSchema,
    createToken,
    loginSchema,
    userCreateSchema,
    userUpdateSchema,
    userResponseSchema,
    userUpdateResponseSchema,
    userCreateResponseSchema,
} from './user.schema';

import { adsSchema, adsCreateSchema, adsUpdateSchema } from './ads.schema';

import {
    addressSchema,
    addressCreateSchema,
    addressSchemaUpdate,
} from './address.schema';

import { imageUpdateSchema, imageCreateSchema } from './image.schema';

export default {
    userSchema,
    loginSchema,
    userCreateSchema,
    userUpdateResponseSchema,
    userCreateResponseSchema,

    userUpdateSchema,
    createToken,
    userResponseSchema,

    adsSchema,
    adsCreateSchema,
    adsUpdateSchema,

    addressSchema,
    addressCreateSchema,
    addressSchemaUpdate,

    imageUpdateSchema,
    imageCreateSchema,
};
