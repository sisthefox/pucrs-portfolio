import express from 'express';
import { calculateFibonacci } from '../controllers/fibonacciController.js';

const router = express.Router();

router.get('/:n', calculateFibonacci);

export default router;