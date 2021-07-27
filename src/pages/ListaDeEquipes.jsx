import React from "react";
//import { Link, useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import api from "../services/api.equipes";
import apiUsuarios from "../services/api.usuarios";

function ListaDeEquipes(){
	const [equipes, setEquipes] = React.useState([]);

	React.useEffect(() => {
		api.obterEquipes().then((res) => {
			setEquipes(res);
		});
	}, []);

	return (
		<div>
			{equipes.map((e) => (
				<div key={e.idEquipe}>
					<p>{e.nome}</p>
					<h1>{e.idEquipe}</h1>
						<button>Editar</button>

						<button>apagar</button>

					<button onClick={() => apiUsuarios.editarTime(id, e.idEquipe)}>
						Entrar
					</button>
				</div>
			))}
		</div>
	);
}

export default ListaDeEquipes;
