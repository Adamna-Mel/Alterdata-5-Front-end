import React from "react";
import { Link, useParams } from "react-router-dom";

import api from "../../services/api.equipes";

function ApagarEquipe() {
	const { id } = useParams();

	const handleClick = () => {
		api.apagarEquipe(id);
	};
	return (
		<div>
			<button onClick={handleClick}>Apagar</button>
		</div>
	);
}

export default ApagarEquipe;
