import { Router } from 'express';
import middleware, { UserMiddleware } from '../middlewares';
import schema from '../schemas';
import controller from '../controllers';

export const image: Router = Router();

image.patch(
    '/:id',
    UserMiddleware.validateData(schema.imageUpdateSchema),
    middleware.validateToken,
    controller.imageUpdateController
);
image.delete(
    '/:id',
    middleware.validateToken,
    controller.imageDeleteController
);
