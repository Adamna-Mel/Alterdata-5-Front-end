import React, { useState } from "react";
import "./App.css";
import Rotas from "./routes/Rotas";

import UserProvider from "./context/UserContext";

//TODO: Atualizar a senha

//TODO: fazer a imagem padrao de cargo usuario e time se naõ conseguir arrumar as mensagem do cadastro de usuario

//TODO: Tirar o texto double click dos inputs

//TODO: Estilizar o perfil para ficar mais intuitivo

//TODO: consertar o lapizinho

//TODO: colocar a paginação entre a lista de cargos e o botao

//TODO: Altear a visualização dos inputs no perfil (deixar so os)

//TODO: Colocar os modais e recarregar as paginas

//TODO: tirar as 99 pag da lista de usuario
function App() {
	return (
		<UserProvider>
			<Rotas />
		</UserProvider>
	);
}

export default App;
