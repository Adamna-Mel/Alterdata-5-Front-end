import React from "react";

import api from "../../services/api.usuarios";

function Editar() {
	const [id, setId] = React.useState("");
	const [status, setStatus] = React.useState("");
	const [papel, setPapel] = React.useState("");

	const handleClick = () => {
		const novo = {
			status,
			papel,
		};

		api.editarUsuario(id, novo).then((res) => console.log(novo, "\n", res));
	};
	return (
		<>
			<input
				type="number"
				value={id}
				placeholder="ID"
				onChange={(e) => setId(+e.target.value)}
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

			<button onClick={handleClick}>Enviar</button>
		</>
	);
}

export default Editar;
