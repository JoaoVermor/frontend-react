import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import UsuariosTabela from './UsuariosTabela';


export default function Component1() {


  const [contador, setContador] = useState(0);

  const [dados, setDados] = useState([]);

  const url = "https://backend-beta-wine.vercel.app/usuarios";


  function incContador() {
    setContador(contador + 1);
  }

  const decrement = function
    decContador() {
    setContador((contador) => contador
      - 1);
  }

  useEffect(() => {
    console.log("Requisitando dados por um fetch")
    fetch(url)
      .then(resp => resp.json())
      .then(resp => setDados(resp))
  }, []);

  return (
    <>Componente de exemplo
      <p>teste</p>
      <button onClick={incContador}> Incrementar</button>
      <button onClick={decrement}> decrementar</button>
      <p>{contador}</p>

      <UsuariosTabela dados={dados}/>
    </>
  )
}
