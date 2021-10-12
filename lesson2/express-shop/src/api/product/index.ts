import { createProduct } from './post';
import { Router } from 'express';
import { getProducts, getProductById } from './get';

const router = Router();

router.post('', createProduct);
router.get('', getProducts);

router.get('/:id', getProductById);

export default router;
