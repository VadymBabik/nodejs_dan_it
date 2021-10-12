import { Express, json } from 'express';
import productRouter from './product/index';
import { productRepository } from '../helpers/file-repository';

export const registerApi = (app: Express) => {
  app.use(json());

  app.use('/products', productRouter);
};
