import React, { useState } from "react";
import "./App.css";
import Rotas from "./routes/Rotas";

import UserProvider from "./context/UserContext";

//TODO: Colocar os modais e recarregar as paginas

//TODO: alterar o máximo de paginas do pagination

//TODO: bi=ug na imagem do cargo no perfil

//TODO: imagem do usuário não está parecendo no perfil

function App() {
	return (
		<UserProvider>
			<Rotas />
		</UserProvider>
	);
}

export default App;
