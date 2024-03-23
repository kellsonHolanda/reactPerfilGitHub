import { useState } from "react";
import Perfil from "./components/Perfil/Index";
// import Formulario from "./components/Formulario/formulario";
import Repolist from "./components/ReposList/repositorio";

function App() {
  // const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return (
    <>
      <Perfil />
      {/* {formularioEstaVisivel && (
        <Formulario />
      )} */}
      <Repolist />

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toogle</button>
    </>
  )
}

export default App
