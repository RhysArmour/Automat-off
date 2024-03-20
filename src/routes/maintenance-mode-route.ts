import { Request, Response, Router } from 'express';
import { getMobileMaintenanceStatus, getWebMaintenanceStatus } from '../services/maintenance-mode';

export const maintenanceModeRouter: Router = Router();

maintenanceModeRouter.get('/v1/maintenance-mode', async (req: Request, res: Response) => {
  console.log('beginning maintenanceMode check');
  let result = {
    status: 404,
    message: 'Invalid platform provided',
    outageState: 'Not Available'
  }

  if (req.body.platform === 'Mobile') {
    result = await getMobileMaintenanceStatus()
  } 

  if (req.body.platform === 'Web') {
    result = await getWebMaintenanceStatus()
  } 

  res.send(result)
});

