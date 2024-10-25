import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

import { connectDb } from './configs/dbConnection.js';

import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';
import projectTypeRoute from './routes/projectTypeRoute.js';
import phaseRoute from './routes/phaseRoute.js';
import projectRoute from './routes/projectRoute.js';
import userProjectRoute from './routes/userProjectRoute.js';
import sampleRoute from './routes/sampleRoute.js';
import responseRoute from './routes/responseRoute.js';
import fileRoute from './routes/fileRoute.js';

dotenv.config({ path: `${process.cwd()}/.env` });

connectDb();

const app = express();
const port = process.env.PORT || 3001;
const apiVersion = process.env.API_VERSION || 'v1';
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(logger('dev'));

app.use('/uploads', express.static(path.join(path.dirname(''), 'uploads')));

app.use(`/api/${apiVersion}/auth`, authRoute);
app.use(`/api/${apiVersion}/users`, userRoute);
app.use(`/api/${apiVersion}/project-types`, projectTypeRoute);
app.use(`/api/${apiVersion}/phase`, phaseRoute);
app.use(`/api/${apiVersion}/projects`, projectRoute);
app.use(`/api/${apiVersion}/user-projects`, userProjectRoute);
app.use(`/api/${apiVersion}/samples`, sampleRoute);
app.use(`/api/${apiVersion}/responses`, responseRoute);
app.use(`/api/${apiVersion}/files`, fileRoute);

app.use('*', (_, res) => {
  res.status(404).json({
    error: 'Oops... Can not found this route!!!',
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
