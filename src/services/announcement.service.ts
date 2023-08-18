import { AppError } from '../errors';
import { announcementRepo } from '../data-source';
import { Ads } from '../entities';

import schema from '../schemas';
import { TAdsResponse } from '../interfaces';

export const getAdsById = async (id: string): Promise<Ads | null> =>
    await announcementRepo.findOneBy({ id });

export const announcementOrNotFound = async (
    id: string
): Promise<Ads | null> => {
    const announcement = await announcementOrNotFound(id);
    if (!announcement) throw new AppError('Ads not found', 404);
    return announcement;
};

export const listAllAds = async (): Promise<Ads[]> => {
    return await announcementRepo.find();
};

export const createAds = async (data: Ads): Promise<TAdsResponse> => {
    console.log(data);
    const newAds = await announcementRepo.save(announcementRepo.create(data));

    const announcement: TAdsResponse =
        schema.announcementResponseSchema.parse(newAds);

    return announcement;
};

export const updateAds = async (data: Ads): Promise<TAdsResponse> => {
    const newAds = await announcementRepo.save(announcementRepo.create(data));

    const announcement: TAdsResponse =
        schema.announcementResponseSchema.parse(newAds);

    return announcement;
};

export const deleteAds = async (id: string): Promise<void> => {
    const announcement: Ads | null = await announcementRepo.findOneBy({
        id,
    });
    await announcementRepo.remove(announcement!);
};
