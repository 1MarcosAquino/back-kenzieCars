import 'express-async-errors';
import 'reflect-metadata';
import express, { Application } from 'express';
import { handleErrors } from './errors';

import { randomUUID } from 'node:crypto';
// import { UUID } from 'typeorm/driver/mongodb/bson.typings';

const teste = randomUUID();

const app: Application = express();

app.use(express.json());

app.use('/users', (req, res) => res.status(200).json({ teste: teste }));
app.use('/login', (req, res) => res.status(200).json('ok'));
app.use('/announcements', (req, res) => res.status(200).json('ok'));

app.use(handleErrors);

export default app;
