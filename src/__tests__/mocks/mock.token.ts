import { sign } from 'jsonwebtoken';

let secretKey = '1234';
process.env.SECRET_KEY = secretKey;

export default {
    genToken: (announcer: boolean, id: string): string => {
        return sign({ announcer }, secretKey, { subject: id });
    },
    invalidSignature: sign({ announcer: 'boolean' }, 'invalid_signature'),
    jwtError: '12345',
};
