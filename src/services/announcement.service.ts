import { AppError } from '../errors';
import { announcementRepo, userRepo } from '../data-source';
import { Announcement } from '../entities';

import schema from '../schemas';
import { TAnnouncementResponse } from '../interfaces';

export const getAnnouncementById = async (
    id: string
): Promise<Announcement | null> => await announcementRepo.findOneBy({ id });

export const announcementOrNotFound = async (
    id: string
): Promise<Announcement | null> => {
    const announcement = await announcementOrNotFound(id);
    if (!announcement) throw new AppError('Announcement not found', 404);
    return announcement;
};

export const verifyAnnouncementExists = async (id: string): Promise<void> => {
    const announcement: Announcement | null = await getAnnouncementById(id);

    if (announcement) throw new AppError('Announcement already exists', 409);
};

export const listAllAdsFromTheSameUser = async (
    id: string
): Promise<Announcement[] | undefined> => {
    const announcements = await userRepo.findOne({
        where: { id },
        relations: ['announcements'],
    });
    return announcements?.announcements;
};

export const announcementOrNotFoundByTelephoneNumber = async (
    id: string
): Promise<Announcement | null> => {
    const announcement = await announcementRepo.findOneBy({ id });
    if (!announcement) throw new AppError('Announcement not found', 404);
    return announcement;
};

export const announcementOrNotFoundByEmail = async (
    id: string
): Promise<Announcement | void> => {
    const announcement: Announcement | null = await announcementRepo.findOneBy({
        id,
    });

    if (!announcement) throw new AppError('Announcement not found', 404);

    return announcement;
};

export const verifyAnnouncementNotByTelephoneNumber = async (
    id: string
): Promise<Announcement | null> => {
    const announcement = await announcementRepo.findOneBy({ id });
    if (announcement) throw new AppError('Telephone already exists', 409);
    return announcement;
};

export const verifyAnnouncementNotExistsByEmail = async (
    id: string
): Promise<void> => {
    const announcement: Announcement | null = await announcementRepo.findOneBy({
        id,
    });

    if (announcement) throw new AppError('Email already exists', 409);
};

export const createAnnouncement = async (
    data: Announcement
): Promise<TAnnouncementResponse> => {
    console.log(data);
    const newAnnouncement = await announcementRepo.save(
        announcementRepo.create(data)
    );

    const announcement: TAnnouncementResponse =
        schema.announcementSchemaResponse.parse(newAnnouncement);

    return announcement;
};

export const updateAnnouncement = async (
    data: Announcement
): Promise<TAnnouncementResponse> => {
    const newAnnouncement = await announcementRepo.save(
        announcementRepo.create(data)
    );

    const announcement: TAnnouncementResponse =
        schema.announcementSchemaResponse.parse(newAnnouncement);

    return announcement;
};

export const deleteAnnouncement = async (id: string): Promise<void> => {
    const announcement: Announcement | null = await announcementRepo.findOneBy({
        id,
    });
    await announcementRepo.remove(announcement!);
};
