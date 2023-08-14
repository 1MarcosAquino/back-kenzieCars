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
    announcementSchemaRequest,
    announcementSchemaResponse,
    announcementSchemaUpdate,
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
    announcementSchemaRequest,
    announcementSchemaResponse,
    announcementSchemaUpdate,

    addressSchema,
    addressCreateSchema,
    addressSchemaUpdate,
};
