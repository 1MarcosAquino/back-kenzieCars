import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ZodTypeAny } from 'zod';
import { AppError } from '../errors';
import service from '../services';

export const permissionOfAccess = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const id = res.locals.id;
    const userId = req.params.id || res.locals.id;

    if (id !== userId) throw new AppError('Insufficient permission', 403);

    return next();
};

export const validateToken = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const { authorization } = req.headers;

    if (!authorization) throw new AppError('Missing bearer token', 401);

    const token = authorization.split(' ')[1];

    const secretKey = String(process.env.SECRET_KEY);

    jwt.verify(token, secretKey, (err: any, decoded: any) => {
        if (err) throw new AppError(err.message, 401);

        res.locals.announcer = decoded.announcer;
        res.locals.id = decoded.sub;
    });

    return next();
};

export const validateDataRequest =
    (anySchema: ZodTypeAny) =>
    (req: Request, res: Response, next: NextFunction): void => {
        req.body = anySchema.parse(req.body);

        next();
    };

export const ensureUserNotExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    await service.verifyUserExistsByEmail(req.body.email);

    return next();
};

export const ensureUserExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const id = res.locals.id;
    if (req.body.email) await service.userOrNotFoundByEmail(req.body.email);
    else await service.userOrNotFoundById(id);

    return next();
};
