import jwt from 'jsonwebtoken';
import { TCreateToken } from '../interfaces';

export const createToken = ({ announcer, id }: TCreateToken): string => {
    return jwt.sign(
        {
            announcer,
        },
        String(process.env.SECRET_KEY),
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: String(id),
        }
    );
};
