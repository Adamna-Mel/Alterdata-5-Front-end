import React, { useState } from "react";
import "./App.css";
import Rotas from "./routes/Rotas";

import UserProvider from "./context/UserContext";
//TODO: Atualizar perfil

//TODO: pop up Cadastro de usuário (verificar se ta funfando)

//TODO: Ver o lance do status

//TODO: fazer o remover da equipe

//TODO: Botao apagar usuario do sistema

//TODO: pagina do usuario

//TODO: editar avatar equipe cargo e usario

//TODO: bug alterar nome da equipe

//TODO: tirar a senha ao cadastrar usuario

//TODO: atualizar status no perfil

//TODO: Atualizar a senha

function App() {
	return (
		<UserProvider>
			<Rotas />
		</UserProvider>
	);
}

export default App;
