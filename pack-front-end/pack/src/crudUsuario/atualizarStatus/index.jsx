import React from "react";
import api from "../../services/api.usuarios";

import { useParams } from "react-router-dom";

function Atualizar() {
	const { id } = useParams();

	const [nome, setNome] = React.useState("");
	const [status, setStatus] = React.useState("");
	const [papel, setPapel] = React.useState("");

	const hendleClick = (e) => {
		e.preventDefault();
		const novo = {
			nome,
			status,
			papel,
		};
		api.editarUsuario(id, novo).then((res) => {
			console.log(novo, id);
			console.log(res);
		});
	};

	return (
		<form>
			<input
				type="text"
				value={nome}
				placeholder="Nome"
				onChange={(e) => setNome(e.target.value)}
			/>
			<input
				type="text"
				value={status}
				placeholder="Status"
				onChange={(e) => setStatus(e.target.value)}
			/>
			<input
				type="text"
				value={papel}
				placeholder="Papel"
				onChange={(e) => setPapel(e.target.value)}
			/>
			<input type="submit" onClick={hendleClick} />
		</form>
	);
}

export default Atualizar;
