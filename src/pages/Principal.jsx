import React from "react";
import auth from "../services/auth";
import { useHistory } from "react-router-dom";
import ListaDeEquipes from "./ListaDeEquipes";
import ListaDeUsuarios from "./ListaDeUsuarios";
import Login from "./Login";

import apiUsuarios from "../services/api.usuarios";
import apiEquipes from "../services/api.equipes";

export default function Principal() {
	const [temEquipe, setTemEquipe] = React.useState(false);

	const idUsuario = localStorage.getItem("@user-id");

	let history = useHistory();

	const handleLogout = () => {
		auth.logout();
		history.push("/login");
	};

	React.useEffect(() => {
		apiUsuarios.obterUsuarioPorId(idUsuario).then((res) => {
			console.log(res);
			res.equipe.idEquipe === 1 ? setTemEquipe(false) : setTemEquipe(true);
		});
	}, []);
	return (
		<>
			<button onClick={handleLogout}> Deslogar </button>
			<button>Meu Time</button>
			{temEquipe ? <ListaDeUsuarios /> : <ListaDeEquipes />}
		</>
	);
}
