import React from 'react';

function ItemMusica(props) {
  return (
    <>
      <div className="card-music">
        <div className="icons">
          <img src="../imagens/edit-icon.png" alt="" />
          <img src="../imagens/delete-icon.png" alt="" />
        </div>
        <div className="info-music">
          <p>
            <strong className="card-title">música: </strong>
            <input className="input-music-enable" type="text" value={props.musica} />
          </p>
          <p>
            <strong className="card-title">artista: </strong>
            <input className="input-music-enable" type="text" value={props.artista} />
          </p>
          <p>
            <strong className="card-title">categoria: </strong>
            <input className="input-music-enable" type="text" value={props.genero} />
          </p>
          <p>
            <strong className="card-title">ano: </strong>
            <input className="input-music-enable" type="text" value={props.ano} />
          </p>
          <button className="btn-salvar-disabled">Salvar</button>
        </div>
      </div>
    </>
  );
}

export default ItemMusica;