import React from "react";

import Card from "../../components/cardUser/UserCard";
import api from "../../services/api.usuarios";
import { Link } from "react-router-dom";

import "./style.css";

function Time() {
	const [usuario, setUsuario] = React.useState([]);
	const [pesquisa, setPesquisa] = React.useState("");

	React.useEffect(() => {
		api.obterUsuarios().then((res) => {
			console.log(res);
			setUsuario(res);
		});
	}, []);

	return (
		<>
			<Link to={"/adicionar"}>
				<button>Cadastrar novo usuario</button>
			</Link>
			<div className="container">
				{usuario.map((u) => (
					<Card key={u.id} id={u.id} nome={u.nome} status={u.status} />
				))}
			</div>
		</>
	);
}

export default Time;
