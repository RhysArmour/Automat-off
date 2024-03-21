import express from 'express';
import { validateRouter } from './routes/validate-route';
import cors from 'cors';
import { maintenanceModeRouter } from './routes/maintenance-mode-route';
export const app = express();

export const routes = express.Router();

app.use(express.json());
app.use(cors());
app.use(validateRouter);
app.use(maintenanceModeRouter)
