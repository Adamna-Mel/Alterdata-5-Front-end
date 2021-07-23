import React from "react";
import { Link, useHistory } from "react-router-dom";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import api from "../../services/api.usuarios";

import "./style.css";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function AdicionarUsuario() {
	const [nome, setNome] = React.useState("");
	const [status, setStatus] = React.useState("");
	const [senha, setSenha] = React.useState("");
	const [login, setLogin] = React.useState("");
	const [avatar, setAvatar] = React.useState("");
	
	//Snackbar/Alert

	const history = useHistory();
	const home = () => {
		history.push("/");
		history.go(0)

	}
	
		//AlertSucess

		const [openAlert, setOpenAlert] = React.useState(false);

		const handleClickAlert = () => {
			setOpenAlert(true);
		  };

		  
	
		const handleCloseAlert = (event, reason) => {
			if (reason === 'clickaway') {
			return;
			}
	
			setOpenAlert(false);
		};
		
		//

		//Alert Error

		const [openAlertError, setOpenAlertError] = React.useState(false);

		const handleClickAlertError = () => {
			setOpenAlertError(true);
		  };

		  
	
		const handleCloseAlertError = (event, reason) => {
			if (reason === 'clickaway') {
			return;
			}
	
			setOpenAlertError(false);
		};

		//

	const handleClick = (e) => {
		e.preventDefault();
		const novo = {
			nome: nome.trim(),
			status: status.trim(),
			senha: senha.trim(),
			login: login.trim(),
			avatar: avatar.trim(),
		};

		const validar =
			novo.nome.length !== 0 &&
			novo.senha.length !== 0 &&
			novo.login.length !== 0;

		if (validar) {
			api.adicionarUsuario(novo).then((res) => {
				if (res.status === 201) {
					setOpenAlert(true);

				} else {
					setOpenAlertError(true);
				}

			});
		} else {
			
			let msg = "";
			novo.nome.length === 0 ? msg += " Nome" : null;
			novo.senha.length === 0 ? msg += " Senha" : null;
			novo.login.length === 0 ? msg += " Login" : null;
			setOpenAlertError(true);
		}

	};

	const classes = useStyles();



	return (

		<form className={classes.root}>
			<div>
				<Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
					<Alert onClose={handleCloseAlert} severity="success">
					Usuário cadastrado com sucesso!!
					</Alert>
				</Snackbar>
				<Snackbar open={openAlertError} autoHideDuration={6000} onClose={handleCloseAlertError}>
					<Alert onClose={handleCloseAlertError} severity="error">
					Houve algum erro no cadastro. Confira se todos os campos estão preenchidos corretamente!
					</Alert>
				</Snackbar>
				<TextField
					required
					id="filled-required"
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
					id="filled-required"
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
					id="filled-required"
					label="Senha"
					defaultValue=""
					variant="filled"
					onChange={(e) => setSenha(e.target.value)}
					value={senha}
					type="password"
				/>

				<TextField
					id="filled-required"
					label="Status (MAX. 25)"
					defaultValue=""
					variant="filled"
					onChange={(e) => setStatus(e.target.value)}
					value={status}
					type="text"
					inputProps={{ maxLength: 25 }}
				/>
			</div>

	

			<div className="botoes">
				<Button onClick={handleClick} variant="contained" className={classes.blueButton}>
					Enviar
				</Button>
				
					<Button variant="contained" className={classes.grayButton} onClick={home}>
						Voltar
					</Button>
			
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
		  maxWidth: 600,
		'& .MuiTextField-root': {
		  margin: 5,
		  width: '25ch',
		},
	  },
  })


export default AdicionarUsuario;
