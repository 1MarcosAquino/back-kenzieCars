export { UserMiddleware } from './user.middleware';

import { validateToken, permissionOfAccess } from './user.middleware';

export default {
    validateToken,
    permissionOfAccess,
};
