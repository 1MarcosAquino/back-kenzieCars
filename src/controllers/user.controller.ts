import { Request, Response } from 'express';
import { UserService, AddressService } from '../services';
import utility from '../utilities';
import schema from '../schemas';
import { AppError } from '../errors';
/*
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
*/
export class UserController {
    constructor() {}

    static async login(
        req: Request,
        res: Response
    ): Promise<Response<{ token: string }>> {
        const user = await UserService.retiver({ email: req.body.email });

        const token = utility.createToken(user!);

        await utility.comparePassword(req.body.password, user!.password);

        return res.status(200).json({ token });
    }

    static async create(req: Request, res: Response): Promise<Response> {
        const userExsists = await UserService.retiver({
            email: req.body.email,
        });

        if (userExsists) throw new AppError('Ops! Email already exists', 409);

        const { address, ...rest } = req.body;
        const user = await UserService.create(rest);

        await AddressService.create({ ...address, user });

        const parse = schema.userCreateResponseSchema.parse(user);

        return res.status(201).json(parse);
    }
}
