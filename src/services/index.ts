import {
    userOrNotFoundByEmail,
    userOrNotFoundById,
    verifyUserExistsByEmail,
    createUser,
    deleteUser,
    updateUser,
} from './user.service';

import {
    createAddress,
    deleteAddress,
    updateAddress,
    addressOrNotFoundById,
} from './address.service';

import { listAllAds, createAds } from './announcement.service';

export default {
    userOrNotFoundByEmail,
    userOrNotFoundById,
    verifyUserExistsByEmail,
    createUser,
    deleteUser,
    updateUser,

    listAllAds,
    createAds,

    createAddress,
    deleteAddress,
    updateAddress,
    addressOrNotFoundById,
};
