import React from "react";
import { Link, useParams } from "react-router-dom";

import api from "../../services/api.equipes";

function CriarEquipe() {
	const [nome, setNome] = React.useState("");

	const handleClick = () => {
		const novo = {
			nome,
		};
		api.adicionarEquipe(novo);
	};

	return (
		<>
			<input
				type="text"
				value={nome}
				onChange={(e) => setNome(e.target.value)}
			/>
			<button onClick={handleClick}>Salvar</button>
		</>
	);
}

export default CriarEquipe;
