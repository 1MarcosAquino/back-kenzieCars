import { imageRepo } from '../data-source';
import { Image } from '../entities';
// import { TimageCreate } from '../interfaces';

export class ImageService {
    constructor() {}

    static async create(data: Image): Promise<Image> {
        return await imageRepo.save(imageRepo.create(data));
    }

    static async retiever(id: string): Promise<Image | null> {
        return await imageRepo.findOneBy({ id });
    }

    static async delete(data: Image): Promise<void> {
        await imageRepo.remove(data);
    }
}
