import { Router } from 'express';
import controller from '../controllers';
import middleware from '../middlewares';
import schema from '../schemas';

export const users: Router = Router();

users.post(
    '',
    middleware.ensureUserNotExists,
    middleware.validateDataRequest(schema.userCreateSchema),
    controller.createUSer
);

users.get(
    '',
    middleware.validateToken,
    middleware.permissionOfAccess,
    controller.retrieverUser
);

users.patch(
    '',
    middleware.validateDataRequest(schema.userUpdateSchema),
    middleware.ensureUserExists,
    middleware.validateToken,
    controller.updateUser
);

users.delete(
    '',
    middleware.validateToken,
    middleware.permissionOfAccess,
    middleware.ensureUserExists,
    controller.deleteUser
);
