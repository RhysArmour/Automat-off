import express from 'express';
import { submitRouter } from './routes/submit-route';
import cors from 'cors'
export const app = express();

export const routes = express.Router();

app.use(express.json());
app.use(cors())
app.use(submitRouter);

