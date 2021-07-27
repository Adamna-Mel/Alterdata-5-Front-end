import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Principal from "./pages/Principal";
import auth from "./services/auth";
import Rotas from "./routes/Rotas";

function App() {
	return <Rotas />;
}

export default App;
