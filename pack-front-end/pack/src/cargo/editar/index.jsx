import React from "react";
import { Link, useParams } from "react-router-dom";

import api from "../../services/api.cargos";

function EditarEquipe() {
	const { id } = useParams();

	const [nome, setNome] = React.useState("");
	const [icone, setIcone] = React.useState("");

	const handleClick = () => {
		const novo = {
			nome,
			icone,
		};
		api.atualizarCargo(id, novo);
	};

	return (
		<>
			<input
				type="text"
				value={nome}
				onChange={(e) => setNome(e.target.value)}
			/>
			<input
				type="text"
				value={icone}
				onChange={(e) => setIcone(e.target.value)}
			/>
			<button onClick={handleClick}>Salvar</button>
		</>
	);
}

export default EditarEquipe;
