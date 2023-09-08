import { Router } from 'express';
import controller from '../controllers';
import middleware, { UserMiddleware } from '../middlewares';
import schema from '../schemas';

export const ads: Router = Router();

ads.get('', controller.listAdsController);
ads.get('/:id', controller.retrieverAdsController);

ads.post(
    '',
    UserMiddleware.validateData(schema.adsCreateSchema),
    middleware.validateToken,
    controller.createAdsController
);

ads.patch(
    '/:id',
    UserMiddleware.validateData(schema.adsUpdateSchema),
    middleware.validateToken,
    controller.updateAdsController
);

ads.delete('/:id', middleware.validateToken, controller.deleteAdsController);
