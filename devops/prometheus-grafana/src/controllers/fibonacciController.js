export function calculateFibonacci(req, res) {
  const n = parseInt(req.params.n);

// Validate the input
  if (isNaN(n) || n < 0) {
    return res.status(400).json({ error: 'Invalid parameter' });
  }

// Calculate Fibonacci sequence
  const sequence = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }
  
// Return the result
  res.json({ result: sequence });
}