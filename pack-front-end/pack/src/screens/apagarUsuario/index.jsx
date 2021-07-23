import React from "react";

import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";

import api from "../../services/api.usuarios";

function DeletarUsuario() {
	const { id } = useParams();

	const [usuario, setUsuario] = React.useState({});

	const history = useHistory();

	const home = () => {
		history.push("/");
		history.go(0);
	}

	React.useEffect(() => {
		api.obterUsuariosPorId(id).then((res) => {
			const novo = res;
			setUsuario(novo);
		});
	}, []);

	const handleClick = () => {
		api.apagarUsuario(id).then((res) => {
			console.log(res);
			home()
		});
	
	};

	return (
		<>
			<h3>Apagar o usuario {usuario.nome}?</h3>
		
				<button onClick={handleClick}>Apagar</button>
		

			
				<button onClick={home}>Voltar</button>
			
		</>
	);
}

export default DeletarUsuario;
