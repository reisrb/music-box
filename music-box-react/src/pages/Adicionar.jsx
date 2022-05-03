import React, { useState } from "react";
import Menu from "../components/Menu";

import imgLateral from "../html-css-template/imagens/half-circles-pink-blue.png";

import api from "../api";

function Adicionar() {

  const [musicaInput, setMusicaInput] = useState("");
  const [artistaInput, setArtistaInput] = useState("");
  const [generoInput, setGeneroInput] = useState("");
  const [anoInput, setAnoInput] = useState("");
  const [imagemInput, setImagemInput] = useState("");

  function cadastrar(e) {
    e.preventDefault();

    const objMusica = {
      musica: musicaInput,
      artista: artistaInput,
      categoria: generoInput,
      ano: anoInput,
      imagem: imagemInput
    }

    api.post("/", objMusica).then(res => {
      alert("Cadastrada com sucesso!");
    }).catch(erro => {
      alert("Deu ruim!");
      console.log(erro);
    })

  }

  return (
    <>
      <Menu />
      <div className="container">
        <div className="add-music">

          <div className="formulario">

            <h1>adicionar</h1>

            <br />

            <form onSubmit={cadastrar}>
              <label>Música: <br /><input type="text" value={musicaInput} onChange={e => setMusicaInput(e.target.value)} /></label>
              <br />
              <label>Artista: <br /><input type="text" value={artistaInput} onChange={e => setArtistaInput(e.target.value)} /></label>
              <br />
              <label>Genêro: <br /><input type="text" value={generoInput} onChange={e => setGeneroInput(e.target.value)}/></label>
              <br />
              <label>Ano de Lançamento: <br /><input type="text" value={anoInput} onChange={e => setAnoInput(e.target.value)}/></label>
              <br />
              <label> Imagem (url): <br /><input type="text" value={imagemInput} onChange={e => setImagemInput(e.target.value)}/></label>
              <br />
              <button className="btn" type="submit">Enviar</button>

            </form>
          </div>

          <div className="img-lateral">
            <img src={imgLateral} alt="" />
          </div>

        </div>
      </div>
    </>
  );
}

export default Adicionar;