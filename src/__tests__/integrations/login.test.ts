import supertest from 'supertest';
import app from '../../app';
import { AppDataSource, userRepo } from '../../data-source';
import { User } from '../../entities';
import mock from '../mocks/users';
import { DataSource } from 'typeorm';

describe('POST/login', () => {
    let connection: DataSource;
    const path = '/login';

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then((res) => (connection = res))
            .catch((err) => console.log(err));
    });

    beforeEach(async () => {
        const userList: User[] = await userRepo.find();
        await userRepo.remove(userList);
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Success: sing in', async () => {
        const user: User = userRepo.create(mock.register);
        userRepo.save(user);

        const res = await supertest(app).post(path).send(mock.register);

        expect(res.status).toBe(200);
        //expect(res.body).toBe(expect.any(String));
    });

    it('Error: Invalid credentials', async () => {
        const user: User = userRepo.create(mock.register);
        await userRepo.save(user);

        const res = await supertest(app).post(path).send(mock.loginError);

        expect(res.status).toBe(401);
    });

    it('Error: Use not found', async () => {
        const user: User = userRepo.create(mock.register);
        userRepo.save(user);

        const res = await supertest(app).post(path).send(mock.loginError2);

        expect(res.status).toBe(404);
    });
});
