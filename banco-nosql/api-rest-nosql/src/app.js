import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import fibonacciRoutes from './routes/fibonacci.js';
import tasksRoutes from './routes/tasks.js';
import logger from './middlewares/logger.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(logger);

app.use('/api/fibonacci', fibonacciRoutes);
app.use('/api/tasks', tasksRoutes);

app.get('/', (req, res) => {
  res.send('API REST with MongoDB is running');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
