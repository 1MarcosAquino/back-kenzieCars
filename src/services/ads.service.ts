import { AppError } from '../errors';
import { adsRepo } from '../data-source';
import { Ads } from '../entities';

export const adsOrNotFoundService = async (id: string): Promise<Ads | null> => {
    const ads = await adsRepo.findOne({
        where: { id },
        relations: { images: true },
    });
    if (!ads) throw new AppError('Ads not found', 404);
    return ads;
};

export const retrieverAdsService = async (id: string): Promise<Ads | null> => {
    const ads = await adsRepo.findOneBy({ id });
    if (!ads) throw new AppError('Ads not found', 404);
    return ads;
};

export const listAllAdsService = async (): Promise<Ads[]> => {
    return await adsRepo.find({ relations: { images: true } });
};

export const createAdsService = async (data: Ads): Promise<Ads> => {
    return await adsRepo.save(adsRepo.create(data));
};

export const deleteAdsService = async (ads: Ads): Promise<void> => {
    await adsRepo.remove(ads);
};

export class AdsService {
    constructor() {}

    static async create(data: Ads): Promise<Ads> {
        return await adsRepo.save(adsRepo.create(data));
    }

    static async retiever(id: string): Promise<Ads | null> {
        return await adsRepo.findOneBy({ id });
    }

    static async listAll(): Promise<Ads[]> {
        return await adsRepo.find();
    }

    static async delete(data: Ads): Promise<void> {
        await adsRepo.remove(data);
    }
}
