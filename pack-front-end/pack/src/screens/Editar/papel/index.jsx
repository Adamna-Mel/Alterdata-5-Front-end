import React from "react";
import { Link, useParams } from "react-router-dom";

import apiUsuarios from "../../../services/api.usuarios";
import apiPapeis from "../../../services/api.papeis";
//TODO: Terminar
function EditarPapel() {
	const { id } = useParams();

	const [pepeis, setPapeis] = React.useState([]);

	React.useEffect(() => {
		apiPapeis.obterPepeis().then((res) => {
			console.log(res);
			setPapeis(res);
		});
	}, []);

	return (
		<>
			<input type="text" placeholder="Papel" />
			<form>
				<select>
					<option name="teste">teste</option>
				</select>
			</form>
		</>
	);
}

export default EditarPapel;
