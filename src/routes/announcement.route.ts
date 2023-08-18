import { Router } from 'express';
import controller from '../controllers';
import middleware from '../middlewares';
import schema from '../schemas';

export const announcement: Router = Router();

announcement.post(
    '',

    middleware.validateDataRequest(schema.announcementCreateSchema),
    controller.createAnnouncement
);
announcement.get(
    '',

    controller.listAnnouncements
);
/*

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
