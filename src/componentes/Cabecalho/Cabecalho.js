import React from "react";
import "./Cabecalho.css";
import Botao from "../Botao/Botao";

export default function Cabecalho() {
  return (
    <header className="cabecalho-container">
      <div>Logo</div>
      <div>Entregador</div>
      <div>Restaurante e Mercado</div>
      <div> Carreiras </div>
      <div>iFood Card</div>
      <div>
        <Botao texto={"Entrar"} />
      </div>
    </header>
  );
}
