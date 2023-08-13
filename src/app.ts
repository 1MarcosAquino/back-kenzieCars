import 'express-async-errors';
import 'reflect-metadata';
import express, { Application } from 'express';
import { handleErrors } from './errors';
import cors from 'cors';
import route from './routes';

const app: Application = express();

app.use(express.json());

app.use(cors({ origin: '*' }));

// app.use('/users', route.users);
app.use('/login', route.login);
app.use('/announcements', (req, res) => res.status(200).json('ok'));

app.use(handleErrors);

export default app;
