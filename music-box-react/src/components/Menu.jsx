import React from 'react';
import logoVerde from '../html-css-template/imagens/logo-verde.png';
import avatar from '../html-css-template/imagens/avatar.png';

function Menu() {
  return(
    <>
      <nav>
        <div className="container">
            <img src={logoVerde} alt="Logo" className="logo" />
            <img src={avatar} alt="Avatar" className="avatar" />
        </div>
    </nav>
    </>
  );
}

export default Menu;