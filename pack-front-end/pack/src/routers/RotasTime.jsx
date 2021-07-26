import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Rotas.css";

import Times from "../times/TodosTimes/index";
import EditarTime from "../times/editarTime/index";
import CriarTime from "../times/criar/index";
import ApagarTime from "../times/apagar/index";

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
        <button>Criar Time</button>
      </Link>

      <Switch>
        <Route path={"/apagar/:id"}>
          <ApagarTime />
        </Route>

        <Route path={"/criar"}>
          <CriarTime />
        </Route>

        <Route path={"/editar/:id"}>
          <EditarTime />
        </Route>

        <Route path={"/"}>
          <Times />
        </Route>
      </Switch>
    </Router>
  );
}

export default Rotas;
