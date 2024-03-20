import { app } from './app';

const port = process.env.PORT || 4000;
console.log(`Listening on port: ${port}`);
app.listen(port);

