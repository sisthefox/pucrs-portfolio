
export default function handler(req, res) {
  const { n } = req.query;
  const num = parseInt(n);
  if (isNaN(num) || num < 1) {
    return res.status(400).json({ error: "Parâmetro inválido" });
  }

  const sequence = [];
  let a = 0, b = 1;
  while (sequence.length < num) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }

  res.status(200).json({ sequence });
}
