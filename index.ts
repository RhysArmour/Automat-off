import { app } from './app';

export const handler = (event) => {
  console.log('IN HANDLER:', event);
  const port = process.env.PORT || 4000;
  console.log(`Listening on port: ${port}`);
  app.listen(port);
};

