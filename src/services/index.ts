import {
    userOrNotFoundByEmailService,
    verifyUserExistsByEmailService,
    createUserService,
    deleteUserService,
    userOrNotFoundService,
    retrieverUserService,
} from './user.service';

import {
    createAddressService,
    addressOrNotFoundService,
    deleteAddressService,
} from './address.service';

import {
    adsOrNotFoundService,
    createAdsService,
    deleteAdsService,
    listAllAdsService,
    retrieverAdsService,
} from './ads.service';

import {
    createImageService,
    imageOrNotFoundService,
    deleteImageService,
} from './image.service';
import {
    commentsOrNotFoundService,
    createCommentService,
    deleteCommentService,
} from './comment.service';

export default {
    userOrNotFoundByEmailService,
    verifyUserExistsByEmailService,
    createUserService,
    deleteUserService,
    userOrNotFoundService,
    retrieverUserService,

    createAddressService,
    addressOrNotFoundService,
    deleteAddressService,

    adsOrNotFoundService,
    retrieverAdsService,
    createAdsService,
    deleteAdsService,
    listAllAdsService,

    createImageService,
    imageOrNotFoundService,
    deleteImageService,

    createCommentService,
    deleteCommentService,
    commentsOrNotFoundService,
};
