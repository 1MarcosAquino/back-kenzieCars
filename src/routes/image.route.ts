import { Router } from 'express';
import middleware from '../middlewares';
import schema from '../schemas';
import controller from '../controllers';

export const image: Router = Router();

image.patch(
    '/:id',
    middleware.validateDataRequest(schema.imageUpdateSchema),
    middleware.validateToken,
    controller.imageUpdateController
);
image.delete(
    '/:id',
    middleware.validateToken,
    controller.imageDeleteController
);
