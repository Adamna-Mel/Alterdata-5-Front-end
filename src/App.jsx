import React, { useState } from "react";
import "./App.css";
import Rotas from "./routes/Rotas";

import UserProvider from "./context/UserContext";

//TODO: fazer a imagem padrao de cargo e time
//TODO: colocar a paginação entre a lista de cargos e o botao

//TODO: Colocar os modais e recarregar as paginas

//TODO: alterar o máximo de paginas do pagination

function App() {
	return (
		<UserProvider>
			<Rotas />
		</UserProvider>
	);
}

export default App;
