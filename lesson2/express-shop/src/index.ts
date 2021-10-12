import express from 'express';
import { registerApi } from './api/index';
import ConfigService from './helpers/config.service';

let app = express();

registerApi(app);

const port = ConfigService.get<number>('APP_PORT') || 8000;

app.listen(port, () => {
  console.log(`start listening on ${port}`);
});
