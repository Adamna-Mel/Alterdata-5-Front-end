import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//MATERIAL-UI
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

//COMPONENTS
import Login from "../pages/Login";
import Principal from "../pages/Principal";
import NavBar from "../components/NavBar/NavBar";
import ListaDeUsuarios from "../pages/ListaDeUsuarios";
import Footer from "../components/Footer/Footer";
import Create from "../components/Team/Create/Create";
import EditTeam from "../components/Team/Edit/Edit";
import DeleteTeam from "../components/Team/Delete/Delete";
import RegisterUser from "../components/RegisterUser";
import UserProfile from "../components/UserProfile";
import { useEffect } from "react";

function Rotas() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect( ()=> {
      const mode = localStorage.getItem('@darkMode');
      if (mode !== null)
          setDarkMode(mode);
  },[]);
      
  useEffect( ()=> {
    darkMode ? 
        localStorage.setItem('@darkMode',true)
      : 
        localStorage.setItem('@darkMode',false)
  },[darkMode])

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
        <div
          style={
            darkMode
              ? {
                  backgroundColor: "#303030",
                  height: "100%",
                  marginBottom: 50,
                }
              : {
                  backgroundColor: "#F5F3F4",
                  height: "100%",
                  marginBottom: 50,
                }
          }
        >
          <NavBar
            style={{ marginBottom: 100 }}
            check={darkMode}
            change={() => setDarkMode(!darkMode)}
          />
          <Switch>
            <Route path={"/apagar-equipe"}>
              <DeleteTeam />
            </Route>

            <Route path={"/editar-equipe"}>
              <EditTeam />
            </Route>

            <Route path={"/login"}>
              <Login />
            </Route>

            <Route path={"/criartime"}>
              <Create />
            </Route>

            <Route path={"/perfil"}>
              <UserProfile />
            </Route>

            <Route path={"/registrar"}>
              <RegisterUser />
            </Route>

            <Route path={"/"}>
              <Principal />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default Rotas;
