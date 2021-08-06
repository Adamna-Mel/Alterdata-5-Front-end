import React from "react";
import "./App.css";
import Rotas from "./routes/Rotas";

import UserProvider from "./context/UserContext";

function App() {
	return (
		<UserProvider>
			<Rotas />
		</UserProvider>
	);
}

export default App;
