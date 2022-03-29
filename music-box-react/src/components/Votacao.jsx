import React, {useState} from 'react';

function Votacao(props){
  const [numero, setNumero] = useState(0)

  function votar() {
    setNumero(numero + 1);
  }
  return(
    <>
      <h1>{props.titulo}</h1>
      <button onClick={votar}>Votar</button>
      <h1>Quantidade votos: {numero}</h1>
    </>
  );
}

export default Votacao;