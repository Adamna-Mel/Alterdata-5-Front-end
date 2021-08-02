import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import avatar from "../../assets/3-4.png";

import axios from "axios";

import apiUsuarios from "../../services/api.usuarios";

function UserProfile() {
	const [nome, setNome] = React.useState("");
	const [login, setLogin] = React.useState("");
	const [senha, setSenha] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [status, setStatus] = React.useState("");
	const [imagem, setImagem] = React.useState(null);
	const [caminho, setCaminho] = React.useState(null);

	const papercss = { padding: "25px 20px", width: 400, margin: "30px auto" };

	const handleClick = (e) => {
		e.preventDefault();

		let file = imagem;

		let formData = new FormData();

		formData.append("img", file);
		formData.append("nome", nome);
		formData.append("email", email);
		formData.append("senha", senha);
		formData.append("status", status);
		formData.append("login", login);

		apiUsuarios.adicionarUsuario(formData).then((res) => console.log(res));
	};

	const handleFile = (e) => {
		let file = e.target.files[0];

		setImagem(file);
		setCaminho(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<Grid>
			<Paper elevation={20} style={papercss}>
				<Grid align="center">
					<img
						src={caminho}
						style={{
							width: 100,
							height: 100,
							borderRadius: 400 / 2,
							borderStyle: "solid",
							borderColor: "#1A2228",
							marginTop: -50,
						}}
					/>
					<h2 style={{ fontFamily: "initial", color: "#1A2228" }}>
						Cadastrar Usuário
					</h2>
				</Grid>
				<form>
					<input type="file" onChange={handleFile} />
					<TextField
						fullWidth
						label="Nome"
						placeholder="-"
						value={nome}
						onChange={(e) => setNome(e.target.value)}
					/>
					<TextField
						fullWidth
						label="Login"
						placeholder="-"
						value={login}
						onChange={(e) => setLogin(e.target.value)}
					/>
					<TextField
						type="password"
						fullWidth
						label="Senha"
						placeholder="-"
						value={senha}
						onChange={(e) => setSenha(e.target.value)}
					/>
					<TextField
						fullWidth
						label="Email"
						placeholder="-"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						fullWidth
						label="Status"
						placeholder="-"
						value={status}
						onChange={(e) => setStatus(e.target.value)}
					/>
					<Button type="submit" color="primary" onClick={handleClick}>
						Cadastrar
					</Button>
					<Button
						variant="outlined"
						color="primary"
						style={{ marginLeft: "50%" }}
					>
						Voltar
					</Button>
				</form>
			</Paper>
		</Grid>
	);
}

export default UserProfile;
