import React from "react";
import "./Botao.css";

// import { Container } from './styles';

function Botao({ texto, altura, largura }) {
  return (
    <div className="botao-container" style={{ width: largura, height: altura }}>
      {texto}
    </div>
  );
}

export default Botao;
