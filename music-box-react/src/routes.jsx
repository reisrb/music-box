import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //npm i react-router-dom

import Home from "./pages/Home";
import Musicas from "./pages/Musicas";
import Adicionar from "./pages/Adicionar";
import NotFound from "./pages/NotFound";

function Rotas() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/musicas" element={<Musicas />} />
        <Route path="/adicionar" element={<Adicionar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;