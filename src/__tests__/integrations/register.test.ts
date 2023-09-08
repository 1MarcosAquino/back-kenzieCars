import supertest from 'supertest';
import { AppDataSource } from '../../data-source';
import { DataSource } from 'typeorm';
import app from '../../app';
import { User } from '../../entities';
import user from '../mocks/users';

describe('POST /users', () => {
    let connection: DataSource;

    const route = '/users';
    const userRepo = AppDataSource.getRepository(User);

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then((res) => (connection = res))
            .catch((error) => console.error(error));
    });

    beforeEach(async () => {
        const users: User[] = await userRepo.find();
        await userRepo.remove(users);
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Should register user', async () => {
        const res = await supertest(app).post(route).send(user.register);

        expect(res.status).toBe(201);

        const payload = {
            ...user.registerResponse,
            id: expect.any(String),
        };

        expect(res.status).toBe(201);
        expect(res.body).toEqual(expect.objectContaining(payload));
    });
});
