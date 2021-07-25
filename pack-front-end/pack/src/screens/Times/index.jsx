import React from "react";
import api from "../../services/api.usuarios";
import Card from "../../components/card/index";
import CadastrarUsuario from "../../froms/AtualizarUsuario/index";

function Time() {
	const [users, setUsers] = React.useState([]);

	const [nome, setNome] = React.useState("");
	const [status, setStatus] = React.useState("");
	const [cargo, setCargo] = React.useState("");

	React.useEffect(() => {
		api.obterUsuarios().then((data) => setUsers(data));
	}, []);

	return (
		<>
			<CadastrarUsuario />
			{users.map((u) => (
				<Card nome={u.nome} cargo={u.cargo} status={u.status} />
			))}
		</>
	);
}

export default Time;
