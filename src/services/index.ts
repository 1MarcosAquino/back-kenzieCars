import {
    userOrNotFoundByEmail,
    userOrNotFoundById,
    verifyUserExistsByEmail,
    createUser,
    deleteUser,
    updateUser,
} from './user';

import {
    createAddress,
    deleteAddress,
    updateAddress,
    addressOrNotFoundById,
} from './address';

export default {
    userOrNotFoundByEmail,
    userOrNotFoundById,
    verifyUserExistsByEmail,
    createUser,
    deleteUser,
    updateUser,

    createAddress,
    deleteAddress,
    updateAddress,
    addressOrNotFoundById,
};
