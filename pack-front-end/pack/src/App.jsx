import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";

import "./App.css";
import UserCard from "./components/UserCard";
import TeamTitle from "./components/TeamTitle";
import Nav from "./components/Nav";
import Footer from "./components/footer/Footer";
import Time from "./routers/Rotas";

import RotasEquipe from "./routers/RotasTime";
import RotasCargos from "./routers/RotasCargo";
import Rotas from "./routers/Rotas";

import RotasPrincipais from "./routers/RotasPrincipais";

import Paper from "@material-ui/core/Paper";

import Login from "./components/login/Login";

import RotasTeste from "./routers/RotasTeste";
import auth from "./services/auth";

function App() {
  return auth.isAuthenticated() ? <Nav /> : <Login />;
}

export default App;

//TODO: Alterar a forma de reload da pagina
