import 'express-async-errors';
import 'reflect-metadata';
import express, { Application } from 'express';
import { handleErrors } from './errors';

const app: Application = express();

app.use(express.json());

app.use('/users', (req, res) => res.status(200).json('ok'));
app.use('/login', (req, res) => res.status(200).json('ok'));
app.use('/announcements', (req, res) => res.status(200).json('ok'));

app.use(handleErrors);

export default app;
