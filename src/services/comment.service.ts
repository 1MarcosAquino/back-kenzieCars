import { AppError } from '../errors';
import { commentsRepo } from '../data-source';
import { Comment } from '../entities';

export const commentsOrNotFoundService = async (
    id: string
): Promise<Comment | void> => {
    const comments = await commentsRepo.findOneBy({ id });

    if (!comments) throw new AppError('Comment not found', 404);

    return comments;
};

export const createCommentService = async (data: Comment): Promise<Comment> =>
    await commentsRepo.save(commentsRepo.create(data));

export const deleteCommentService = async (data: Comment): Promise<void> => {
    await commentsRepo.remove(data);
};
