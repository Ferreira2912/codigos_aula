import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { IoCaretUp } from "react-icons/io5";
import { IoCaretDown } from "react-icons/io5";
import { IoReload } from "react-icons/io5";

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
      
      <button onClick={adicionar} class="but-mais"><IoCaretUp /></button>
      <button onClick={resetar} class="but-reset"><IoReload /></button>
      <button onClick={diminuir} class="but-menos"><IoCaretDown /></button> 


    </div>
  );
}

export default App;
