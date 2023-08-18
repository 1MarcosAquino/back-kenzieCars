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

import {
    announcementSchema,
    announcementCreateSchema,
    announcementResponseSchema,
    announcementUpdateSchema,
} from './announcement.schema';

import {
    addressSchema,
    addressCreateSchema,
    addressSchemaUpdate,
} from './address.schema';

export default {
    userSchema,
    loginSchema,
    userCreateSchema,
    userUpdateResponseSchema,
    userCreateResponseSchema,

    userUpdateSchema,
    createToken,
    userResponseSchema,

    announcementSchema,
    announcementCreateSchema,
    announcementResponseSchema,
    announcementUpdateSchema,

    addressSchema,
    addressCreateSchema,
    addressSchemaUpdate,
};
