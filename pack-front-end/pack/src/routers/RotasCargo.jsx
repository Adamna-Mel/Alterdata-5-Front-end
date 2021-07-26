import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Rotas.css";

import CriarCargo from "../cargo/criar/index";
import Cargos from "../cargo/cargos";
import ApagarCargo from "../cargo/apagar/index";
import EditarCargo from "../cargo/editar/index";

function Rotas() {
  return (
    <Router>
      <Link
        to={"criar"}
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button>Criar Cargo</button>
      </Link>

      <Switch>
        <Route path={"/editar/:id"}>
          <EditarCargo />
        </Route>

        <Route path={"/apagar/:id"}>
          <ApagarCargo />
        </Route>

        <Route path={"/criar"}>
          <CriarCargo />
        </Route>

        <Route path={"/"}>
          <Cargos />
        </Route>
      </Switch>
    </Router>
  );
}

export default Rotas;
