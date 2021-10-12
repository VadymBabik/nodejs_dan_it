import { Request, Response } from 'express';
import { productRepository } from '../../helpers/file-repository';

export const createProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body;

  const product = await productRepository.add({ name, price });

  res.send(product);
};
