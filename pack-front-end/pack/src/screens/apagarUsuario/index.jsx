import React from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import api from "../../services/api.usuarios";

function DeletarUsuario() {
	const { id } = useParams();

	const [usuario, setUsuario] = React.useState({});

	React.useEffect(() => {
		api.obterUsuariosPorId(id).then((res) => {
			const novo = res;
			setUsuario(novo);
		});
	}, []);

	const handleClick = () => {
		api.apagarUsuario(id).then((res) => {
			console.log(res);
		});
	};

	return (
		<>
			<h3>Apagar o usuario {usuario.nome}?</h3>
			<Link to="/">
				<button onClick={handleClick}>Apagar</button>
			</Link>

			<Link to="/">
				<button>Voltar</button>
			</Link>
		</>
	);
}

export default DeletarUsuario;
