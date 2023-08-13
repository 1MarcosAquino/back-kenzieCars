import { v2 as cloudinary } from 'cloudinary';

export const upload = async () => {
    cloudinary.config({
        cloudinary_url: process.env.CLOUDINARY_URL,
    });
};
