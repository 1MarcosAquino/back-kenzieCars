import { imageRepo } from '../data-source';
import { Image } from '../entities';
import { AppError } from '../errors';
import { TimageCreate } from '../interfaces';

export const createImageService = async (data: TimageCreate): Promise<Image> =>
    await imageRepo.save(imageRepo.create(data));

export const imageOrNotFoundService = async (
    id: string
): Promise<Image | void> => {
    const image: Image | null = await imageRepo.findOneBy({ id });

    if (!image) throw new AppError('Ops! Image not found.', 404);

    return image;
};

export const deleteImageService = async (data: Image): Promise<void> => {
    await imageRepo.remove(data);
};
