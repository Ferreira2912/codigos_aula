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

      <button onClick={diminuir} class="button-27">Diminuir</button> 
      <button onClick={resetar} class="button-27">Resetar</button>
      <button onClick={adicionar} class="button-27">Aumentar</button>
    </div>
  );
}

export default App;
