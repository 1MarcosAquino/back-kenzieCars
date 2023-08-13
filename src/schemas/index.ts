import {
    userSchema,
    createToken,
    loginSchema,
    userReqSchema,
    userResSchema,
    userUpdateSchema,
} from './user';

import {
    announcementSchema,
    announcementSchemaRequest,
    announcementSchemaResponse,
    announcementSchemaUpdate,
} from './announcement';

import {
    addressSchema,
    addressSchemaRequest,
    addressSchemaUpdate,
} from './address';

export default {
    userSchema,
    loginSchema,
    userReqSchema,
    userResSchema,
    userUpdateSchema,
    createToken,

    announcementSchema,
    announcementSchemaRequest,
    announcementSchemaResponse,
    announcementSchemaUpdate,

    addressSchema,
    addressSchemaRequest,
    addressSchemaUpdate,
};
