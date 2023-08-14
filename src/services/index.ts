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
