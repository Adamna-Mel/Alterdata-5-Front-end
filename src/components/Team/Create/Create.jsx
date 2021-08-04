import React from "react";
import { useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import api from "../../../services/api.equipes";
import apiUsuario from "../../../services/api.usuarios";

import { Typography, Modal, Fade, Backdrop } from "@material-ui/core";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function NovaEquipe(props) {
	const history = useHistory();
	const [nome, setNome] = React.useState("");
	const [imagem, setImagem] = React.useState(null);
	const [caminho, setCaminho] = React.useState(null);

	const idUsuario = localStorage.getItem("@user-id");

	const handleCreate = () => {
		const formData = new FormData();

		formData.append("nome", nome);
		formData.append("img", imagem);

		if (nome.length > 0) {
			api.adicionarEquipe(formData).then((res) => {
				if (res.status === 201) {
					setOpenAlert(true);
					apiUsuario.editarTime(idUsuario, res.data.idEquipe).then((res) => {
						history.go("/");
					});
				} else {
					setOpenAlertError(true);
				}
			});
		} else {
			setOpenAlertError(true);
		}
	};

	const handleClose = () => {
		props.setOpenModal(false);
	};

	const handleFile = (e) => {
		setImagem(e.target.files[0]);
		setCaminho(URL.createObjectURL(e.target.files[0]));
	};

	//Snackbar/Alert
	//AlertSucess

	const [openAlert, setOpenAlert] = React.useState(false);

	const handleClickAlert = () => {
		setOpenAlert(true);
	};

	const handleCloseAlert = (event, reason) => {
		if (reason === "clickaway") {
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
		if (reason === "clickaway") {
			return;
		}

		setOpenAlertError(false);
	};

	//

	const classes = useStyles();

	return (
		<form className={classes.root}>
			<Snackbar
				open={openAlert}
				autoHideDuration={3000}
				onClose={handleCloseAlert}
			>
				<Alert onClose={handleCloseAlert} severity="success">
					Equipe criada com sucesso!!!
				</Alert>
			</Snackbar>
			<Snackbar
				open={openAlertError}
				autoHideDuration={4000}
				onClose={handleCloseAlertError}
			>
				<Alert onClose={handleCloseAlertError} severity="error">
					Houve algum erro ao criar equipe!
				</Alert>
			</Snackbar>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={props.openModal}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={props.openModal}>
					<div
						className={classes.paper}
						style={{
							alignSelf: "center",
							flexDirection: "column",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<div style={{ marginLeft: "auto", marginRight: "auto" }}>
							<img
								src={caminho}
								style={{
									width: 100,
									height: 100,
									borderRadius: 400 / 2,
									borderStyle: "solid",
									borderColor: "#0083C1",
									marginTop: -80,
									borderWidth: 5,
									backgroundColor: "#F5F3F4",
								}}
							/>
						</div>
						<Card elevation={0}>
							<input type="file" onChange={handleFile} />
						</Card>

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
							style={{ width: 300 }}
						/>
						<Button
							color="primary"
							variant="contained"
							onClick={handleCreate}
							className={classes.button}
						>
							Criar
						</Button>

						<Button
							variant="contained"
							onClick={handleClose}
							className={classes.button}
						>
							Voltar
						</Button>
					</div>
				</Fade>
			</Modal>
		</form>
	);
}

export default NovaEquipe;
const useStyles = makeStyles((theme) => ({
	root: { justifyContent: "center" },
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		borderRadius: 20,
	},
	button: {
		marginTop: 15,
	},
	buttonDelete: {
		margin: 5,
		backgroundColor: "#F22",
		"&:hover": {
			backgroundColor: "#F00",
		},
	},
}));
