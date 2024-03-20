import { Request, Response, Router } from 'express';
import { validateJiraTicket } from '../services/validator-service';

export const validateRouter: Router = Router();

validateRouter.get('/v1/validate', async (req: Request, res: Response) => {
  console.log('beginning validate');

  if (req.body == undefined) {
    return 400;
  }
  const result = await validateJiraTicket(req.body.jiraTicket);

  console.log(result);

  if (result === 201) {
    res.send('Jira ticket is valid');
  } else {
    res.send('Jira ticket is not valid');
  }
});

