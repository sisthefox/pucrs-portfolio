// src/app.js

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fibonacciRoutes from './routes/fibonacci.js';
import tasksRoutes from './routes/tasks.js';
import logger from './middlewares/logger.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(logger);

app.use('/api/fibonacci', fibonacciRoutes);
app.use('/api/tasks', tasksRoutes);

app.get('/', (req, res) => {
  res.send('API REST is running 🎉');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

export default app;
