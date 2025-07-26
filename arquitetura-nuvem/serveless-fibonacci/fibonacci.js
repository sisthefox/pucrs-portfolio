function fibonacci(n) {
  const sequence = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }

  return sequence;
}

module.exports = fibonacci;