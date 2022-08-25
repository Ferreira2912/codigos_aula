import { useState } from 'react';
import './App.css';

function App() {

  const [nome, setNome] = useState();
  const [nota1, setNota] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [lista, setLista] = useState([]);
  const [listaNum1, setListaNum1] = useState([]);
  const [listaNum2, setListaNum2] = useState([]);


  function adicionar() {
    console.log('adicionar ')
    lista.push(nome);
    listaNum1.push(nota1)
    listaNum2.push(nota2);
    setLista([...lista]);
    setListaNum1([...listaNum1])
    setListaNum2([...listaNum2])

    console.log('lista ', lista)
    console.log('listaNum1' , listaNum1)
    console.log('listaNum2' , listaNum2)
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


    <tr>
    {
          lista.map((n, index) => {
            return <td key={index}>{n}</td>
          })
        }
    </tr>
    <tr>
    {
          listaNum1.map((n, index) => {
            return <td key={index}>{n}</td>
          })
        }
    </tr>
    <tr>
    {
          listaNum2.map((n, index) => {
            return <td key={index}>{n}</td>
          })
        }
    </tr>
  
    </div>
  );
}

export default App;