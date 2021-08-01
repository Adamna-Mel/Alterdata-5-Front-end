import React from "react";

//MATERIAL-UI
import LinearProgress from "@material-ui/core/LinearProgress";

//COMPONENTS
import ListaDeEquipes from "./ListaDeEquipes";
import ListaDeUsuarios from "./ListaDeUsuarios";
import Login from "./Login";

//SERVICES
import auth from "../services/auth";
import apiUsuarios from "../services/api.usuarios";

import useWindowDimensions from "../hooks/WindowDimension";

export default function Principal() {
  const [loading, setLoading] = React.useState(false);
  const [temEquipe, setTemEquipe] = React.useState(false);

  const idUsuario = localStorage.getItem("@user-id");

  React.useEffect(() => {
    apiUsuarios.obterUsuarioPorId(idUsuario).then((res) => {
      console.log(res);
      res.equipe === null ? setTemEquipe(false) : setTemEquipe(true);
    });
    setTimeout(() => {
      setLoading(true);
    }, 1300);
  }, []);

  const { height, width } = useWindowDimensions();

  return (
    <>
      {loading ? (
        <div>
          {auth.isAuthenticated() ? (
            temEquipe ? (
              <ListaDeUsuarios />
            ) : (
              <ListaDeEquipes />
            )
          ) : (
            <Login />
          )}
        </div>
      ) : (
        <div>
          <LinearProgress />
          <div style={{ height: height }}></div>
        </div>
      )}
    </>
  );
}
