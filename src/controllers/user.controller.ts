import { Request, Response } from 'express';
import service from '../services';
import utility from '../utilities';
import schema from '../schemas';

export const login = async (req: Request, res: Response): Promise<Response> => {
    const user = await service.userOrNotFoundByEmailService(req.body.email);
    const token = utility.createToken(user!);

    await utility.comparePassword(req.body.password, user!.password);

    return res.status(200).json({ token });
};

export const createUSer = async (
    req: Request,
    res: Response
): Promise<Response> => {
    await service.verifyUserExistsByEmailService(req.body.email);

    const { address } = req.body;
    const user = await service.createUserService(req.body);

    await service.createAddressService({ ...address, user });

    const parse = schema.userCreateResponseSchema.parse(user);

    return res.status(201).json(parse);
};

export const retrieverUser = async (
    req: Request,
    res: Response
): Promise<Response<Response>> => {
    const user = await service.userOrNotFoundService(res.locals.id);
    const parse = schema.userResponseSchema.parse(user);

    return res.status(200).json(parse);
};

export const updateUser = async (req: Request, res: Response) => {
    const data = {
        ...(await service.userOrNotFoundService(res.locals.id)),
        ...req.body,
    };
    await service.createUserService(data);

    return res.status(200).json(`${Object.keys(req.body)} updated`);
};

export const deleteUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const user = await service.userOrNotFoundService(res.locals.id);

    await service.deleteAddressService(user.address);
    await service.deleteUserService(user);

    return res.status(204).send();
};
