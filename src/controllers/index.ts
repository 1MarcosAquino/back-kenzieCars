export { UserController } from './user.controller';

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
