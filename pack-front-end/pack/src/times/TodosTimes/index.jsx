import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import api from "../../services/api.times";

function TodosTimes() {
	const [equipes, setEquipes] = React.useState([]);

	React.useEffect(() => {
		api.obterequipes().then((res) => {
			setEquipes(res);
		});
	}, []);

	return (
		<div>
			{equipes.map((e) => (
				<div key={e.id}>
					<p>{e.nome}</p>
					<Link to={`/editar/${e.id}`}>
						<button>Editar</button>
					</Link>

					<Link to={`/apagar/${e.id}`}>
						<button>apagar</button>
					</Link>
				</div>
			))}
		</div>
	);
}

export default TodosTimes;
