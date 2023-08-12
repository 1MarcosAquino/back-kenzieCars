import jwt from 'jsonwebtoken';
import { TCreateToken } from '../interfaces';

export const createToken = ({ email, id }: TCreateToken): string => {
    return jwt.sign(
        {
            email,
        },
        String(process.env.SECRET_KEY),
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: String(id),
        }
    );
};
