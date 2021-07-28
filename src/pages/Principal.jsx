import React from "react";
import auth from "../services/auth";
import ListaDeEquipes from "./ListaDeEquipes";
import ListaDeUsuarios from "./ListaDeUsuarios";
import Login from "./Login";
import apiUsuarios from "../services/api.usuarios";

export default function Principal() {
	const [temEquipe, setTemEquipe] = React.useState(false);

	const idUsuario = localStorage.getItem("@user-id");

	React.useEffect(() => {
		apiUsuarios.obterUsuarioPorId(idUsuario).then((res) => {
			console.log(res);
			res.equipe.idEquipe === 1 ? setTemEquipe(false) : setTemEquipe(true);
		});
	}, []);

	return (
		<>
		{auth.isAuthenticated() ? 
				(temEquipe? <ListaDeUsuarios/> : <ListaDeEquipes/>)
				: <Login/>
		}
		</>
	);
}
