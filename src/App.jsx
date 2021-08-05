import React, { useState } from "react";
import "./App.css";
import Rotas from "./routes/Rotas";

import UserProvider from "./context/UserContext";

//TODO: Atualizar a senha

//TODO: fazer a imagem padrao de cargo usuario e time se naõ conseguir arrumar as mensagem do cadastro de usuario

function App() {
	return (
		<UserProvider>
			<Rotas />
		</UserProvider>
	);
}

export default App;
