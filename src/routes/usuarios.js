import express from 'express';
import {
  getAll,
  getOne,
} from '../controllers/usuarios';
import { withErrorHandling } from './utils';
import { validateToken } from '../middlewares/validador';

const router = express.Router();

router.get('/', withErrorHandling(getAll));
router.get('/:id', withErrorHandling(getOne));

export default router;