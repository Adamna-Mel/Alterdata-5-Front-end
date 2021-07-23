import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import api from "../../services/api.usuarios";

//TODO: fazer tratamento
function AtualizarUsuario() {
	const { id } = useParams();

	const [nome, setNome] = React.useState("");
	const [status, setStatus] = React.useState("");
	const [cargo, setCargo] = React.useState("");
	const [senha, setSenha] = React.useState("");
	const [login, setLogin] = React.useState("");
	const [avatar, setAvatar] = React.useState("");
	const [equipe, setEquipe] = React.useState("");

	const handleClick = (e) => {
		e.preventDefault();

		console.log(id);

		const novo = {
			nome,
			status,
			cargo,
			senha,
			login,
			avatar,
			equipe,
		};

		const validar =
			novo.nome.length !== 0 ||
			novo.senha.length !== 0 ||
			novo.login.length !== 0;

		if (validar) {
			api.atualizarUsuario(id, novo).then((res) => {
				if (res.status === 201) {
					alert("Usuario cadastrado com sucesso!");
					setNome("");
					setStatus("");
					setCargo("");
					setSenha("");
					setLogin("");
					setAvatar("");
					setEquipe("");
				} else {
					alert("Algo deu errado!");
				}
			});
		} else {
			alert("Campo obrigatorio.");
		}
	};

	return (
		<form>
			<input
				type="text"
				value={nome}
				placeholder="Nome"
				required
				onChange={(e) => setNome(e.target.value)}
			/>

			<input
				type="text"
				value={login}
				placeholder="Login"
				required
				onChange={(e) => setLogin(e.target.value)}
			/>

			<input
				type="password"
				value={senha}
				placeholder="Senha"
				required
				onChange={(e) => setSenha(e.target.value)}
			/>

			<input
				type="text"
				value={status}
				placeholder="Status"
				onChange={(e) => setStatus(e.target.value)}
			/>

			<input
				type="text"
				value={cargo}
				placeholder="Cargo"
				onChange={(e) => setCargo(e.target.value)}
			/>

			<input
				type="text"
				value={equipe}
				placeholder="Equipe"
				onChange={(e) => setEquipe(e.target.value)}
			/>

			<input
				type="text"
				value={avatar}
				placeholder="Avatar"
				onChange={(e) => setAvatar(e.target.value)}
			/>

			<div className="botoes">
				<button onClick={handleClick}>Enviar</button>

				<Link to="/">
					<button>Voltar</button>
				</Link>
			</div>
		</form>
	);
}
export default AtualizarUsuario;