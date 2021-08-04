import React, { useState } from "react";
import "./App.css";
import Rotas from "./routes/Rotas";

import UserProvider from "./context/UserContext";
//TODO: Atualizar perfil

//TODO: pop up Cadastro de usuário
//TODO: Ver o lance do status
//TODO: pop up Cadastro de equipe
//TODO: Arrumar a estilização do pagination
//TODO: Redirecionar ao apagar a equipe

function App() {
	return (
		<UserProvider>
			<Rotas />
		</UserProvider>
	);
}

export default App;
