import { DataSource, DataSourceOptions, Repository } from 'typeorm';
import { User, Address, Ads, Image, Comment } from './entities';
import 'dotenv/config';
import path from 'path';

const settings = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}');
    const migrationPath: string = path.join(
        __dirname,
        './migrations/**.{ts,js}'
    );
    const nodeEnv: string | undefined = process.env.NODE_ENV;

    if (nodeEnv === 'test') {
        return {
            type: 'sqlite',
            database: ':memory:',
            synchronize: true,
            entities: [entitiesPath],
        };
    }

    const dbUrl: string | undefined = process.env.DATABASE_URL;

    if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

    return {
        type: 'postgres',
        url: dbUrl,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationPath],
    };
};

const AppDataSource = new DataSource(settings());

const adsRepo: Repository<Ads> = AppDataSource.getRepository(Ads);

const userRepo: Repository<User> = AppDataSource.getRepository(User);

const imageRepo: Repository<Image> = AppDataSource.getRepository(Image);

const addressRepo: Repository<Address> = AppDataSource.getRepository(Address);

const commentsRepo: Repository<Comment> = AppDataSource.getRepository(Comment);

export {
    AppDataSource,
    userRepo,
    imageRepo,
    adsRepo,
    addressRepo,
    commentsRepo,
};
