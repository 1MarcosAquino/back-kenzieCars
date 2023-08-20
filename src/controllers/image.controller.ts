import { Request, Response } from 'express';
import { Image } from '../entities';
import service from '../services';

export const imageUpdateController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const response = await service.createImageService({
        ...(await service.imageOrNotFoundService(req.params.id)),
        ...req.body,
    });

    return res.status(201).json(response);
};

export const imageDeleteController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const image = await service.imageOrNotFoundService(req.params.id);
    await service.deleteImageService(image!);
    return res.status(204).send();
};
