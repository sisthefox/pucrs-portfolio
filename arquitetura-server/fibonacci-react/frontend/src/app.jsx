import { useState } from 'react';
import './style.css';

function App() {
  const [n, setN] = useState('');
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');

  const fetchFibonacci = async () => {
    if (!n || isNaN(n)) {
      setError('Type a valid number');
      return;
    }
    // Reset previous results and error
    try {
      const res = await fetch(`http://localhost:3000/fibonacci/${n}`);
      const data = await res.json();
      if (data.error) {
        setError(data.error);
        setResult([]);
      } else {
        setResult(data.result);
        setError('');
      }
    } catch (err) {
      setError('Error connecting to the server.');
      setResult([]);
    }
  };
  // Clear error when input changes
  return (
    <div className="container">
      <h1>Server Sample Fibonacci App</h1>
      <p>Type a number and see the first terms of the sequence:</p>
      <input
        type="number"
        value={n}
        onChange={(e) => setN(e.target.value)}
        placeholder="Ex: 10"
      />
      <button onClick={fetchFibonacci}>Calcular</button>
      {error && <p className="error">{error}</p>}
      {result.length > 0 && (
        <div className="result">
          <h2>Resultado:</h2>
          <p>{result.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default App;