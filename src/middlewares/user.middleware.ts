import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ZodTypeAny } from 'zod';
import { AppError } from '../errors';
import { UserService } from '../services';
import { User } from '../entities';

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

export class UserMiddleware {
    constructor() {}

    static async ensureUserExists(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> {
        const id = res.locals.id;
        const email = req.body.email;

        let user: User | null;

        if (email) user = await UserService.retiver({ email });
        else user = await UserService.retiver({ id });

        if (!user) throw new AppError('Ops!, User not fund', 404);

        return next();
    }

    static async ensureNotUserExists(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> {
        const email = req.body.email;

        const user = await UserService.retiver({ email });

        if (user) throw new AppError('Ops! Email already exists', 409);

        return next();
    }

    static validateData(anySchema: ZodTypeAny) {
        return async (
            req: Request,
            res: Response,
            next: NextFunction
        ): Promise<void> => {
            req.body = anySchema.parse(req.body);

            next();
        };
    }
}
