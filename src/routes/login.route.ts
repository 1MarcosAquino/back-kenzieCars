import { Router } from 'express';
import { UserController } from '../controllers';

import { UserMiddleware } from '../middlewares';
import schema from '../schemas';

export const login: Router = Router();

login.post(
    '',
    UserMiddleware.validateData(schema.loginSchema),
    UserMiddleware.ensureUserExists,
    UserController.login
);
