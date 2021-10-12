import { Express, json } from 'express';
import productRouter from './product/index';

export const registerRouters = (app: Express) => {
  app.use(json());

  app.use('/products', productRouter);
};
