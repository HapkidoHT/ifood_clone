import "./App.css";
import Cabecalho from "./componentes/Cabecalho/Cabecalho.js";
import Botao from "./componentes/Botao/Botao";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Botao texto={"Buscar"} largura={134} altura={49} />
    </div>
  );
}

export default App;
