import express from 'express';
import { registerRouters } from './api/index';
import ConfigService from './helpers/config.service';

let app = express();

registerRouters(app);

const port = ConfigService.get<number>('APP_PORT') || 8000;

app.listen(port, () => {
  console.log(`start listening on ${port}`);
});
