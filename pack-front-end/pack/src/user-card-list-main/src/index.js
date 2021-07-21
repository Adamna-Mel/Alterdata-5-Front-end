import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Nav />
    <App />
  </StrictMode>,
  rootElement
);
