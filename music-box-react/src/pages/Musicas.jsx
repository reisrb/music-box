import React, { useEffect, useState } from "react";
import ItemMusica from '../components/ItemMusica';
import Menu from "../components/Menu";

import api from '../api';

function Musicas() {

  const [musicas, setMusicas] = useState([]);

  useEffect(() => {

    api.get().then((res) => {
      setMusicas(res.data);
    }).catch((err) => {
      console.log(err);
    })

  }, [])

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

          {
            musicas.map(musica => (
              <ItemMusica
                musica={musica.musica}
                artista={musica.artista}
                genero={musica.categoria}
                ano={musica.ano}
                id={musica.id}
                key={musica.id}
              />
            ))
          }

        </div>
      </div>
    </>
  );
}

export default Musicas;