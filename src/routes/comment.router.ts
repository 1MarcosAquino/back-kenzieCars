import { Router } from 'express';
import middleware from '../middlewares';
import controllers from '../controllers';

export const comment: Router = Router();

comment.post('', middleware.validateToken, controllers.createCommentController);

comment.patch(
    '/:id',
    middleware.validateToken,
    controllers.updateCommentController
);
comment.delete(
    '/:id',
    middleware.validateToken,
    controllers.deleteCommentController
);
