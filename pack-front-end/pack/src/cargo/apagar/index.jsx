import React from "react";
import { Link, useParams } from "react-router-dom";

import api from "../../services/api.cargos";

function ApagarEquipe() {
	const { id } = useParams();

	const handleClick = () => {
		api.apagarCargo(id);
	};
	return (
		<div>
			<button onClick={handleClick}>Apagar</button>
		</div>
	);
}

export default ApagarEquipe;
