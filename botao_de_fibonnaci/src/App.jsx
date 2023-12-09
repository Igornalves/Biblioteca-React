import { useState } from 'react';
import './App.css';

const calcularFibonacci = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
  }
};

const calcularFatorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
};

const FibonacciButton = () => {
  const [contador, setContador] = useState(0);
  
  const handleFibonacciClick = () => {
    setContador(contador + 1);
  };
  
  const resultado = calcularFibonacci(contador);
  
  return (
    <div>
      <button onClick={handleFibonacciClick}>
        Clique para calcular Fibonacci
      </button>
      <p> O ${contador}º número de Fibonacci é ${resultado} </p>
    </div>
  );
};

const FatorialButton = () => {
  const [contador, setContador] = useState(2);
  
  const handleFatorialClick = () => {
    setContador(contador + 1);
  };
  
  const resultado = calcularFatorial(contador);
  
  return (
    <div>
      <button onClick={handleFatorialClick}>
        Clique para calcular Fatorial
      </button>
      <p>O Fatorial de ${contador} é ${resultado}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <FibonacciButton />
      <FatorialButton />
    </div>
  );
}

export default App;