import React, { useState } from 'react';

import editIcon from '../html-css-template/imagens/edit-icon.png'
import deleteIcon from '../html-css-template/imagens/delete-icon.png'

import capaPadrao from '../html-css-template/imagens/capa.png'

import api from '../api';

function ItemMusica(props) {

  const [musicaInput, setMusicaInput] = useState(props.musica);
  const [artistaInput, setArtistaInput] = useState(props.artista);
  const [generoInput, setGeneroInput] = useState(props.genero);
  const [anoInput, setAnoInput] = useState(props.ano);

  const imagemFundo = {
    backgroundImage: `url(${props.imagem ? props.imagem : capaPadrao})`
  }

  const [editavel, setEditavel] = useState(false);

  function editar() {

    const objMusica = {
      musica: musicaInput,
      artista: artistaInput,
      categoria: generoInput,
      ano: anoInput
    }

    api.put(`/${props.id}`, objMusica).then(res => {
      alert("Atualizado com sucesso!");
      setEditavel(false);
    }).catch(erro => {
      console.log("Deu ruim!");
    })

  }

  return (
    <>
      <div className="card-music" style={imagemFundo}>
        <div className="icons">
          <img onClick={() => setEditavel(true)} src={editIcon} alt="" />
          <img onClick={() => props.funcaoDeletar(props.id)} src={deleteIcon} alt="" />
        </div>
        <div className="info-music">
          <p>
            <strong className="card-title">música: </strong>
            <input
              className={editavel ? "input-music-enable" : "input-music-disabled"}
              type="text"
              disabled={!editavel}
              defaultValue={musicaInput}
              onChange={(e) => setMusicaInput(e.target.value)}
            />
          </p>
          <p>
            <strong className="card-title">artista: </strong>
            <input
              className={editavel ? "input-music-enable" : "input-music-disabled"}
              type="text"
              disabled={!editavel}
              defaultValue={artistaInput}
              onChange={(e) => setArtistaInput(e.target.value)}
            />
          </p>
          <p>
            <strong className="card-title">categoria: </strong>
            <input
              className={editavel ? "input-music-enable" : "input-music-disabled"}
              type="text"
              disabled={!editavel}
              defaultValue={generoInput}
              onChange={(e) => setGeneroInput(e.target.value)}
            />
          </p>
          <p>
            <strong className="card-title">ano: </strong>
            <input
              className={editavel ? "input-music-enable" : "input-music-disabled"}
              type="text"
              disabled={!editavel}
              defaultValue={anoInput}
              onChange={(e) => setAnoInput(e.target.value)}

            />
          </p>
          <button
            className={editavel ? "btn-salvar-enable" : "btn-salvar-disabled"}
            onClick={editar}
          >Salvar</button>
        </div>
      </div>
    </>
  );
}

export default ItemMusica;