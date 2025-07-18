
async function getFibonacci() {
  const input = document.getElementById('numberInput');
  const result = document.getElementById('result');
  const n = parseInt(input.value);
  if (!n || n < 1) {
    result.textContent = 'Por favor, insira um número válido.';
    return;
  }

  try {
    const res = await fetch(`/api/fibonacci?n=${n}`);
    const data = await res.json();
    result.textContent = data.sequence.join(', ');
  } catch (err) {
    result.textContent = 'Erro ao buscar sequência.';
  }
}
