import React, { useState } from "react";
import "./App.css";
import Rotas from "./routes/Rotas";

import UserProvider from "./context/UserContext";

//TODO: fazer a imagem padrao de cargo usuario e time se naõ conseguir arrumar as mensagem do cadastro de usuario

//TODO: Tirar o texto double click dos inputs

//TODO: consertar o lapisinho

//TODO: colocar a paginação entre a lista de cargos e o botao

//TODO: Colocar os modais e recarregar as paginas

//TODO: tirar as 99 pag da lista de usuario

//TODO: alterar o máximo de paginas do pagination

function App() {
	return (
		<UserProvider>
			<Rotas />
		</UserProvider>
	);
}

export default App;
