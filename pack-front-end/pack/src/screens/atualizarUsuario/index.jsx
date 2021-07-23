import React from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";

import api from "../../services/api.usuarios";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//TODO: fazer tratamento
function AtualizarUsuario() {
	const [nome, setNome] = React.useState("");
	const [status, setStatus] = React.useState("");
	const [cargo, setCargo] = React.useState("");
	const [senha, setSenha] = React.useState("");
	const [login, setLogin] = React.useState("");
	const [avatar, setAvatar] = React.useState("");
	const [equipe, setEquipe] = React.useState("");

	const { id } = useParams();

	let history = useHistory();

	const home = () => {
		history.push("/");
		history.go(0);
	}




	const handleClick = (e) => {
		e.preventDefault();

		console.log(id);

		const novo = {
			nome,
			login,
			status,
			senha,
			cargo,
			avatar,
			equipe,
		};

		const validar =
			novo.nome.length !== 0 ||
			novo.senha.length !== 0 ||
			novo.login.length !== 0;

		if (validar) {
			api.atualizarUsuario(id, novo).then((res) => {
				if (res.status === 200) {
					alert("Usuario atualizado com sucesso!");
					setNome("");
					setStatus("");
					setPapel("");
					setSenha("");
					setLogin("");
					setAvatar("");
					setTime("");
				} else {
					alert("Algo deu errado!");
				}
			});
		} else {
			alert("Campo obrigatorio.");
		}
	};

	const classes = useStyles();

	return (
		<form className={classes.root}>
			<div>

				<TextField
					required
					id="filled-required1"
					label="Nome (MAX. 20)"
					defaultValue=""
					variant="filled"
					onChange={(e) => setNome(e.target.value)}
					value={nome}
					type="text"
					inputProps={{ maxLength: 20 }}
				/>

				<TextField
					required
					id="filled-required2"
					label="Login"
					defaultValue=""
					variant="filled"
					onChange={(e) => setLogin(e.target.value)}
					value={login}
					type="text"
				/>
			</div>

			<div>
				<TextField
					required
					id="filled-required3"
					label="Senha"
					defaultValue=""
					variant="filled"
					onChange={(e) => setSenha(e.target.value)}
					value={senha}
					type="password"
				/>

				<TextField
					id="filled-required4"
					label="Status (MAX. 25)"
					defaultValue=""
					variant="filled"
					onChange={(e) => setStatus(e.target.value)}
					value={status}
					type="text"
					inputProps={{ maxLength: 25 }}
				/>
			</div>

			<div>
				<TextField
					id="filled-required5"
					label="Cargo (MAX. 12)"
					defaultValue=""
					variant="filled"
					onChange={(e) => setCargo(e.target.value)}
					value={cargo}
					type="text"
					inputProps={{ maxLength: 12 }}
				/>

				{/* <TextField
					id="filled-required6"
					label="Avatar"
					defaultValue=""
					variant="filled"
					onChange={(e) => setAvatar(e.target.value)}
					value={avatar}
					type="text"
				/> */}
			</div>

			{/* <input
				type="text"
				value={avatar}
				placeholder="Avatar"
				onChange={(e) => setAvatar(e.target.value)}
			/> */}

			<div className="botoes">
				<Button onClick={handleClick} variant="contained" className={classes.blueButton}>
					Enviar
				</Button>
				{/* <Link style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }} to="/" refresh="true"> */}
					<Button variant="contained" className={classes.grayButton} onClick={home}>
						Voltar
					</Button>
				{/* </Link> */}
			</div>
		</form>
	);
}

const useStyles = makeStyles({
    blueButton:{
		backgroundColor: "#0083C1",
		color: "#ffffff",
		margin: 5,
		'&:hover': {
			backgroundColor: "#7BBBDB",
			color: "#000000",
		}
	},
	grayButton:{
		backgroundColor: "#F5F3F4",
		color: "#000000",
		margin: 5
	},
	root: {
		'& .MuiTextField-root': {
		  margin: 5,
		  width: '25ch',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: "#0083C1",
			},
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: "#0083C1",
		},
		'&.Mui-focused fieldset': {
			borderColor: "#0083C1",
		  },
	  },
  })
export default AtualizarUsuario;
