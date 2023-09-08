import { Router } from 'express';
import { UserController } from '../controllers';
import { UserMiddleware } from '../middlewares';
import schema from '../schemas';

export const users: Router = Router();

users.post(
    '',
    UserMiddleware.validateData(schema.userCreateSchema),
    UserMiddleware.ensureNotUserExists,
    UserController.create
);

/*
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
*/
