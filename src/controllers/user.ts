import { Request, Response } from 'express';
import service from '../services';

import utility from '../utilities';

export const loginUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const user = await service.userOrNotFoundByEmail(req.body.email);
    const token = utility.createToken(user!);

    await utility.comparePassword(req.body.password, user!.password);

    return res.status(200).json({ token });
};
