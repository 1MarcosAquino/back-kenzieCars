import { Router } from 'express';
import controller from '../controllers';
import middleware from '../middlewares';
import schema from '../schemas';

export const users: Router = Router();

users.post(
    '',
    middleware.ensureUserNotExists,
    middleware.validateDataRequest(schema.userReqSchema),
    controller.createUSer
);

users.get(
    '',
    middleware.validateToken,
    middleware.permissionOfAccess,
    controller.retrieverUser
);

users.delete(
    '',
    middleware.validateToken,
    middleware.permissionOfAccess,
    controller.deleteUser
);
