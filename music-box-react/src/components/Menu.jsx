import React from 'react';
import logoVerde from '../html-css-template/imagens/logo-verde.png';
import avatar from '../html-css-template/imagens/avatar.png';

function Menu() {
  return(
    <>
      <nav>
        <div class="container">
            <img src={logoVerde} alt="Logo" class="logo" />
            <img src={avatar} alt="Avatar" class="avatar" />
        </div>
    </nav>
    </>
  );
}

export default Menu;