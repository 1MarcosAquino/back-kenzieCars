import { Request, Response } from 'express';
// import services from '../services';

export const createCommentController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    // const { adsId, ...rest } = req.body;
    // const userI = await services.retrieverUserService(res.locals.id);
    // const adsI = await services.retrieverAdsService(adsId);

    // const peyload = {
    //     ...rest,
    //     user: userI,
    //     ads: adsI,
    // };

    // const { user, ads, ...comment } = await services.createCommentService(
    //     peyload
    // );

    return res.status(201).json('comment');
};

export const updateCommentController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { body } = req;

    // const peyload = {
    //     ...(await services.commentsOrNotFoundService(req.params.id)),
    //     ...body,
    // };

    // const { user, ads, ...comment } = await services.createCommentService(
    //     peyload
    // );

    return res.status(201).json('comment');
};
export const deleteCommentController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    // const comment = await services.commentsOrNotFoundService(req.params.id);

    // await services.deleteCommentService(comment!);

    return res.status(204).send();
};
