import React from "react";

import apiEquipes from "../../../services/api.equipes";

function Create() {
	const [nome, SetNome] = React.useState("");

	const idUsuario = localStorage.getItem("@user-id");

	const handleSubmit = (e) => {
		e.preventDefault();

		const novaEquipe = {
			nome,
		};

		apiEquipes.adicionarEquipe(novaEquipe);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Nome do time..."
				value={nome}
				onChange={(e) => SetNome(e.target.value)}
			/>
			<button type="submit">Criar</button>
		</form>
	);
}

export default Create;
