import { Request, Response } from 'express';
import { productRepository } from '../../helpers/repository';

export const getProducts = async (req, res) => {
  const products = await productRepository.getEntities(true);

  res.send(products);
};

export const getProductById = async (req, res) => {
  const product = await productRepository
    .getEntities()
    .then((res) => res.find((item) => item.id === req.params.id));

  res.send(product);
};
