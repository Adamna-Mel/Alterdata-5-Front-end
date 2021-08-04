import React, { useState } from "react";
import "./App.css";
import Rotas from "./routes/Rotas";

import UserProvider from "./context/UserContext";
//TODO: Atualizar perfil
//TODO: pop up Cadastro de usuário
//TODO: pop up Cadastro de equipe
//TODO: Arrumar a estilização do pagination

function App() {
	return (
		<UserProvider>
			<Rotas />
		</UserProvider>
	);
}

export default App;
