import { Request, Response } from 'express';
import service from '../services';

export const updateAddressController = async (req: Request, res: Response) => {
    const peyload = {
        ...(await service.addressOrNotFoundService(req.params.id)),
        ...req.body,
    };

    const ads = await service.createAddressService(peyload);

    return res.status(200).json(ads);
};
