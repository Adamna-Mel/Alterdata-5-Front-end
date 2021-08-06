import React, { useState } from "react";
import "./App.css";
import Rotas from "./routes/Rotas";

import UserProvider from "./context/UserContext";

//TODO: alterar o máximo de paginas do pagination

function App() {
	return (
		<UserProvider>
			<Rotas />
		</UserProvider>
	);
}

export default App;
