import React, { useState } from "react";
import "./App.css";
import Rotas from "./routes/Rotas";

import UserProvider from "./context/UserContext";
//TODO: Atualizar perfil

//TODO: pop up Cadastro de usuário (verificar se ta funfando)

//TODO: Ver o lance do status

//TODO: pop up Cadastro de equipe

//TODO: Arrumar a estilização do pagination

//TODO: Redirecionar ao apagar a equipe

//TODO: Bug ao apagar cargo

//TODO: bug ao criar cargo

//TODO: recarregar a pagina ao atribuir cargo

//TODO: fazer o remover da equipe

//TODO: Botao apagar usuario do sitema

//TODO: pagina do usuario

//TODO: editar avatar equipe cargo e usario

//TODO: colocar a imagem da equipe

function App() {
	return (
		<UserProvider>
			<Rotas />
		</UserProvider>
	);
}

export default App;
