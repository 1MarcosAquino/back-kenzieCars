import { Request, Response } from 'express';
import service from '../services';
import utility from '../utilities';
import schema from '../schemas';

export const login = async (req: Request, res: Response): Promise<Response> => {
    const user = await service.userOrNotFoundByEmail(req.body.email);
    const token = utility.createToken(user!);

    await utility.comparePassword(req.body.password, user!.password);

    return res.status(200).json({ token });
};

export const createUSer = async (
    req: Request,
    res: Response
): Promise<Response> => {
    await service.verifyUserExistsByEmail(req.body.email);

    const { address } = req.body;
    const user = await service.createUser(req.body);

    await service.createAddress({ ...address, user });

    const parse = schema.userCreateResponseSchema.parse(user);

    return res.status(201).json(parse);
};

export const retrieverUser = async (
    req: Request,
    res: Response
): Promise<Response<Response>> => {
    const user = await service.userOrNotFoundById(res.locals.id);
    const parse = schema.userResponseSchema.parse(user);

    return res.status(200).json(parse);
};

export const updateUser = async (req: Request, res: Response) => {
    const user = await service.userOrNotFoundById(res.locals.id);

    const data = {
        ...user,
        ...req.body,
    };
    await service.updateUser(data);

    return res.status(200).json(`${Object.keys(req.body)} updated`);
};

export const deleteUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const user = await service.userOrNotFoundById(res.locals.id);

    await service.deleteAddress(user.address);
    await service.deleteUser(user);

    return res.status(204).send();
};
