import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import apiEquipe from "../../../services/api.equipes";

function DeleteTeam() {
	const history = useHistory();
	const idEquipe = useLocation().state;

	const handleClick = () => {
		apiEquipe.apagarEquipe(idEquipe);
	};

	return (
		<>
			<button onClick={handleClick}>Apagar</button>
			<button onClick={() => history.push("/")}>Voltar</button>
		</>
	);
}

export default DeleteTeam;
