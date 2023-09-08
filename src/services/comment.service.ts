import { commentsRepo } from '../data-source';
import { Comment } from '../entities';

export class CommentService {
    constructor() {}

    static async create(data: Comment) {
        return await commentsRepo.save(commentsRepo.create(data));
    }

    static async retriever(id: string): Promise<Comment[] | null> {
        return await commentsRepo.findBy({ id });
    }

    static async delete(data: Comment): Promise<void> {
        await commentsRepo.remove(data);
    }
}
