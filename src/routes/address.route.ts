import { Router } from 'express';
import middleware from '../middlewares';
import controllers from '../controllers';
import schema from '../schemas';

export const address: Router = Router();

address.patch(
    '/:id',
    middleware.validateDataRequest(schema.addressSchemaUpdate),
    middleware.validateToken,
    controllers.updateAddressController
);
