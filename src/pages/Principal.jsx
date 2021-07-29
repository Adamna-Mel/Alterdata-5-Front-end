import React from "react";

//COMPONENTS
import ListaDeEquipes from "./ListaDeEquipes";
import ListaDeUsuarios from "./ListaDeUsuarios";
import Login from "./Login";

//SERVICES
import auth from "../services/auth";
import apiUsuarios from "../services/api.usuarios";

export default function Principal() {
  const [temEquipe, setTemEquipe] = React.useState(false);

  const idUsuario = localStorage.getItem("@user-id");

  React.useEffect(() => {
    apiUsuarios.obterUsuarioPorId(idUsuario).then((res) => {
      console.log(res);
      res.equipe === null ? setTemEquipe(false) : setTemEquipe(true);
    });
  }, []);

  return (
    <>
      {auth.isAuthenticated() ? (
        temEquipe ? (
          <ListaDeUsuarios />
        ) : (
          <ListaDeEquipes />
        )
      ) : (
        <Login />
      )}
    </>
  );
}
