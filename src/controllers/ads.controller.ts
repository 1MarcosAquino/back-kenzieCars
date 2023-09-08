import { Request, Response } from 'express';
// import service from '../services';

export const createAdsController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { image } = req.body;
    // const user = await service.retrieverUserService(res.locals.id);
    // const ads = await service.createAdsService({ ...req.body, user });

    // await image.map(async (img: string) => {
    //     const peyload = {
    //         ...{ path: img },
    //         ads,
    //     };
    //     return await service.createImageService(peyload);
    // });

    return res.status(201).json('{ ...ads, image }');
};

export const listAdsController = async (
    req: Request,
    res: Response
): Promise<Response<Response>> => {
    // const ads = await service.listAllAdsService();

    return res.status(200).json('ads');
};

export const retrieverAdsController = async (
    req: Request,
    res: Response
): Promise<Response<Response>> => {
    // const ads = await service.adsOrNotFoundService(req.params.id);

    return res.status(200).json('ads');
};

export const updateAdsController = async (req: Request, res: Response) => {
    // const peyload = {
    //     ...(await service.adsOrNotFoundService(req.params.id)),
    //     ...req.body,
    // };

    // const ads = await service.createAdsService(peyload);

    return res.status(200).json('ads');
};

export const deleteAdsController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    // const ads = await service.adsOrNotFoundService(req.params.id);
    // await service.deleteAdsService(ads!);

    return res.status(204).send();
};
