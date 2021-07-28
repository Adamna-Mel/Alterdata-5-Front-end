import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../pages/Login";
import Principal from "../pages/Principal";
import NavBar from "../components/NavBar/NavBar";
import ListaDeUsuarios from "../pages/ListaDeUsuarios";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";

function Rotas() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        light: "#7bbbdb",
        main: "#0083c1",
        dark: "#0d5375",
        contrastText: "#fff",
      },
      secondary: {
        light: "#fafafa",
        main: "#F5f3f4",
        dark: "#808080",
        contrastText: "#000",
      },
      alert: {
        light: "#d4463b",
        primary: "#a11a10",
        dark: "#5e0e08",
        contrastText: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar check={darkMode} change={() => setDarkMode(!darkMode)} />
        <div
          style={
            darkMode
              ? { backgroundColor: "#303030", height: "100vh" }
              : { backgroundColor: "#F5F3F4", height: "100vh" }
          }
        >
          <Switch>
            <Route path={"/login"}>
              <Login />
            </Route>

            <Route path={"/"}>
              <Principal />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default Rotas;
