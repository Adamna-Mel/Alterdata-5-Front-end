import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./Rotas.css";

import Time from "../screens/times/index";
import Nav from "../components/Nav";
import Apagar from "../screens/apagarUsuario/index";
import Adicionar from "../screens/adicionarUsuario";
import Atualizar from "../screens/atualizarUsuario/index";
import EditarPapel from "../screens/Editar/papel/index";
import EditarTime from "../screens/Editar/time/index";
import EditarStatus from "../screens/Editar/status/index";
import TeamCard from "../components/TeamCard";
import Login from "../components/login/Login";

function Rotas(props) {
  return (
    <Router>
      <Link
        to="/adicionar"
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" color="primary">
          Adicionar usuário
        </Button>
      </Link>
      {/* <Login/> */}
      {/* <TeamCard/> */}

      <Switch>
        <Route path={"/editar-status/:id"}>
          <EditarStatus chamarAPI={props.chamarAPI} />
        </Route>

        <Route path={"/editar-time/:id"}>
          <EditarTime chamarAPI={props.chamarAPI} />
        </Route>

        <Route path={"/editar-papel/:id"}>
          <EditarPapel chamarAPI={props.chamarAPI} />
        </Route>

        <Route path={"/atualizar/:id"}>
          <Atualizar chamarAPI={props.chamarAPI} />
        </Route>

        <Route path={"/adicionar"}>
          <Adicionar chamarAPI={props.chamarAPI} />
        </Route>

        <Route path={"/apagar/:id"}>
          <Apagar chamarAPI={props.chamarAPI} />
        </Route>

        <Route path={"/login"}>
          <Login />
        </Route>

        <Route path={"/"}>
          <Time usuarios={props.usuarios} chamarAPI={props.chamarAPI} />
        </Route>
      </Switch>
    </Router>
  );
}

const useStyles = makeStyles({
  blueButton: {
    backgroundColor: "#0083C1",
    color: "#ffffff",
    margin: 5,
    "&:hover": {
      backgroundColor: "#7BBBDB",
      color: "#000000",
    },
  },
});

export default Rotas;
