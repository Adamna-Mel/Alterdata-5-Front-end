import React, { useState } from "react";
import "./App.css";
import Rotas from "./routes/Rotas";

import UserProvider from "./context/UserContext";
//TODO: Atualizar perfil

//TODO: pop up Cadastro de usuário (verificar se ta funfando)

//TODO: Ver o lance do status

//TODO: Arrumar a estilização do pagination

//TODO: Bug ao apagar cargo

//TODO: bug ao criar cargo

//TODO: recarregar a pagina ao atribuir cargo

//TODO: fazer o remover da equipe

//TODO: Botao apagar usuario do sitema

//TODO: pagina do usuario

//TODO: editar avatar equipe cargo e usario

//TODO: bug alterar nome da euipe

function App() {
	return (
		<UserProvider>
			<Rotas />
		</UserProvider>
	);
}

export default App;
