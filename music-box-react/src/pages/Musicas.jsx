import React from "react";
import ItemMusica from '../components/ItemMusica';
import Menu from "../components/Menu";

function Musicas() {
  return (
    <>
      <Menu />
  
      <div className="container">
        <div className="filter">
          <button className="btn">Adicionar</button>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">

          <ItemMusica 
            musica="In the end"
            artista="Linkin Park"
            genero="Rock do bão"
            ano={2001}
            id="1"
          />
          <ItemMusica 
            musica="Ela Partiu"
            artista="Tim Maia"
            genero="Sofrência da boa"
            ano={1997}
            id="1"
          />

        </div>
      </div>
    </>
  );
}

export default Musicas;