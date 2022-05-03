import React from "react";
import {useNavigate} from "react-router-dom";
import Menu from "../components/Menu";
import targetRed from "../html-css-template/imagens/target-red.png";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Menu />
      <div className="container">
        <div className="add-music">

          <div className="formulario">

            <h1>404</h1>

            <p className="subtitle">se perdeu? nada para ver por aqui...</p>
            <button onClick={() => navigate(-1)} className="btn">voltar</button>
          </div>

          <div className="img-lateral">
            <img src={targetRed} alt="" />

          </div>

        </div>
      </div>
    </>
  );
}

export default NotFound;