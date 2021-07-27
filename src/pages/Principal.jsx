import React from "react";
import auth from "../services/auth";
import { useHistory } from "react-router-dom";
import ListaDeEquipes from "./ListaDeEquipes";
import ListaDeUsuarios from "./ListaDeUsuarios";
import Login from "./Login";

export default function Principal() {
	let history = useHistory();

	const handleLogout = () => {
		auth.logout();
	};
	return (
		<>
			<ListaDeUsuarios />
			<button onClick={handleLogout}> Deslogar </button>
			<button>Meu Time</button>
		</>
	);
}
