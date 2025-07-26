import express from 'express';
import {
  listTasks,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/tasksController.js';

const router = express.Router();

router.get('/', listTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;