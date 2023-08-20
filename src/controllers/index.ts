import {
    login,
    createUSer,
    deleteUser,
    retrieverUser,
    updateUser,
} from './user.controller';

import {
    createAdsController,
    listAdsController,
    retrieverAdsController,
    updateAdsController,
    deleteAdsController,
} from './ads.controller';

import {
    imageUpdateController,
    imageDeleteController,
} from './image.controller';

import { updateAddressController } from './address.controller';

import {
    createCommentController,
    updateCommentController,
    deleteCommentController,
} from './comment.controller';

export default {
    login,
    createUSer,
    deleteUser,
    retrieverUser,
    updateUser,

    createAdsController,
    listAdsController,
    retrieverAdsController,
    updateAdsController,
    deleteAdsController,

    imageUpdateController,
    imageDeleteController,

    updateAddressController,

    createCommentController,
    updateCommentController,
    deleteCommentController,
};
