import supertest from 'supertest';
import { AppDataSource } from '../../../data-source';
import { DataSource } from 'typeorm';
import app from '../../../app';
import { User } from '../../../entities';
import userMock from '../../mocks/users';

describe('Should register user', () => {
    let dataSource: DataSource;
    const route: string = '/users';
    const userRepo = AppDataSource.getRepository(User);

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then((res) => (dataSource = res))
            .catch((error) => console.error(error));
    });

    beforeEach(async () => {
        const users: User[] = await userRepo.find();
        await userRepo.remove(users);
    });

    afterAll(async () => {
        await dataSource.destroy();
    });

    it('Should have is response', async () => {
        const response = await supertest(app).post(route).send(userMock);
        expect(response.status).toBe({ status: 201 });
        expect(response.body).toEqual(
            expect.objectContaining(userMock.registerResponse)
        );
    });
});
