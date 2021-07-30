import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import App from "./App";
import Footer from "./components/footer/Footer"
import Robo from "./components/robo/Robo"
import Login from "./components/login/Login"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Nav />
    <App />
    <Footer />
  </StrictMode>,
  rootElement
);
