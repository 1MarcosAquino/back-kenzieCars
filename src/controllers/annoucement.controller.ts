// announcements;

import { Request, Response } from 'express';
import service from '../services';
import schema from '../schemas';
import listAllAds from '../services';

export const createAnnouncement = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { image } = req.body;
    // const announcement = await service.createAnnouncement(req.body);

    //await service.createImagens({ ...image, announcement });

    //const parse = schema.announcementCreateResponseSchema.parse(announcement);

    return res.status(201).json(req.body);
};

export const listAnnouncements = async (
    req: Request,
    res: Response
): Promise<Response<Response>> => {
    const announcement = await service.listAllAds();
    const parse = schema.announcementResponseSchema.parse(announcement);

    return res.status(200).json(parse);
};
/*


export const updateUser = async (req: Request, res: Response) => {
    const announcement = await service.announcementOrNotFoundById(
        res.locals.id
    );

    const data = {
        ...announcement,
        ...req.body,
    };
    await service.updateUser(data);

    return res.status(200).json(`${Object.keys(req.body)} updated`);
};

export const deleteUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const announcement = await service.announcementOrNotFoundById(
        res.locals.id
    );

    await service.deleteAddress(announcement.address);
    await service.deleteUser(announcement);

    return res.status(204).send();
};
*/
