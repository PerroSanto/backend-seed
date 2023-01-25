import express from 'express';
import usuarios from './usuarios';

const router = express.Router();

router.use('/usuarios', usuarios);

export default router;