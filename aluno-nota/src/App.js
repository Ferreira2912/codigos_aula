import { useState } from 'react';
import './App.css';

function App() {

  const [nome, setNome] = useState();
  const [nota1, setNota] = useState();
  const [nota2, setNota2] = useState();
  const [lista, setLista] = useState([]);
  const [listaNum, setListaNum] = useState([]);


  function adicionar() {
    console.log('adicionar ')
    lista.push(nome);
    listaNum.push(nota1, nota2)
    setLista([...lista]);

    console.log('lista ', lista)
  }

  return (
    <div className="container">
      <h1>Aluno - Notas</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input type="text" className="form-control" onChange={(event) => setNome(event.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Nota 01</label>
          <input type="text" className="form-control" onChange={(event) => setNota(event.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Nota 02</label>
          <input type="text" className="form-control" onChange={(event) => setNota2(event.target.value)} />
        </div>

        <button type="button" onClick={adicionar}>Adicionar</button>
      </form>

      <ul>
        {
          lista.map((n, index) => {
            return <li key={index}>{n}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;