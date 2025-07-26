const express = require('express');
const path = require('path');
const fibonacci = require('./fibonacci');

const app = express();
const PORT = 3000;

// Express configurations
app.use(express.static(path.join(__dirname, 'public')));

// API Fibonacci Endpoint
app.get('/api/fibonacci', (req, res) => {
  const n = parseInt(req.query.n);
  if (isNaN(n) || n < 0) {
    return res.status(400).json({ error: 'Invalid Number' });
  }
// Call the Fibonacci function
  const result = fibonacci(n);
  res.json({ result });
});

// Home route
app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});