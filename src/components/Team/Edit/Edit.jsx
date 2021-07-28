import React, { useState } from "react";

import { useLocation, useHistory } from "react-router-dom";

import apiEquipes from "../../../services/api.equipes";

function Edit() {
	const [nome, setNome] = useState();

	const history = useHistory();
	const idEquipe = useLocation().state;
	const handleSubmit = (e) => {
		e.preventDefault();
		const novo = {
			nome,
		};
		apiEquipes
			.atualizarEquipe(idEquipe, novo)
			.then(alert("Equipe atualizada com sucesso!"))
			.catch(alert("Algo deu errado!"));
	};

	const handleClick = () => {
		history.push("/");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Novo nome..."
				value={nome}
				onChange={(e) => setNome(e.target.value)}
			/>
			<button type="submit">Salvar</button>
			<button onClick={handleClick}>Voltar</button>
		</form>
	);
}

export default Edit;
