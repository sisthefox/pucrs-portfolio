const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
// Fibonacci function
function fibonacci(n) {
  const sequence = [];
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }
  return sequence;
}

// Endpoint to get Fibonacci sequence
app.get('/fibonacci/:n', (req, res) => {
  const n = parseInt(req.params.n);
  if (isNaN(n) || n < 1 || n > 100) {
    return res.status(400).json({ error: 'Invalid parameter. Please use a number between 1 and 100.' });
  }
  res.json({ result: fibonacci(n) });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});