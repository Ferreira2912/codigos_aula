import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [contador, setContador] = useState(0)

  function adicionar () {
    console.log('contar');
    setContador(contador + 1);
  }

  function resetar () {
    console.log('contar');
    setContador(0);
  }


  function diminuir () {
    console.log('contar');
    setContador(contador - 1);
  }

  return (
    <div className="App">
  
      <p>Contador</p>


      <p>{contador}</p>

      <button onClick={diminuir} class="but-menos">Diminuir</button> 
      <button onClick={resetar} class="but-reset">Resetar</button>
      <button onClick={adicionar} class="but-mais">Aumentar</button>
    </div>
  );
}

export default App;
