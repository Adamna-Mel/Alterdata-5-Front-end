import React from "react";
import { useParams } from "react-router";

import api from "../../../services/api.usuarios";

function EditarStatus() {
	const { id } = useParams();

	const [status, setStatus] = React.useState("");

	const handleChange = () => {
		const novo = {
			status,
		};

		api.editarStatus(id, novo).then((res) => {
			console.log(res);
		});
	};

	return (
		<>
			<input
				type="text"
				placeholder="Status"
				value={status}
				onChange={(e) => setStatus(e.target.value)}
			/>

			<button onClick={handleChange}>Salvar</button>
			<button>Canserlar</button>
		</>
	);
}

export default EditarStatus;
