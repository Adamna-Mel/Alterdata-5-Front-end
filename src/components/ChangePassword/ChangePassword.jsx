import React from "react";

import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import {
	Typography,
	Button,
	Fade,
	Backdrop,
	Modal,
	Card,
	TextField,
} from "@material-ui/core";

import apiUsuarios from "../../services/api.usuarios";

function ChangePassword({ openModal, setOpenModal }) {
	const [equipe, setEquipe] = React.useState("");
	const [novaSenha, setNovaSenha] = React.useState("");
	const [senhaAntiga, setSenhaAntiga] = React.useState("");

	const idUsuario = localStorage.getItem("@user-id");

	const history = useHistory();

	const classes = useStyles();

	const handleClose = () => {
		setOpenModal(false);
	};

	const alterarSenha = () => {
		const formData = new FormData();

		formData.append("antigaSenha", senhaAntiga);
		formData.append("novaSenha", novaSenha);

		apiUsuarios
			.alterarSenha(idUsuario, formData)
			.then((res) => console.log(res));
	};

	const handleConfirm = () => {
		alterarSenha();
	};

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={openModal}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={openModal}>
					<div
						className={classes.paper}
						style={{
							alignSelf: "center",
							flexDirection: "column",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<TextField
							id="filled-required"
							label="Senha antiga"
							defaultValue=""
							//   onKeyDown={handleKeyDown}
							onChange={(e) => setSenhaAntiga(e.target.value)}
							value={senhaAntiga}
							type="password"
							size="small"
							multiline
							rows={1}
							inputProps={{ maxLength: 140 }}
							style={{ marginBottom: 10 }}
						/>
						<TextField
							id="filled-required"
							label="Nova Senha"
							defaultValue=""
							//   onKeyDown={handleKeyDown}
							onChange={(e) => setNovaSenha(e.target.value)}
							value={novaSenha}
							type="password"
							size="small"
							multiline
							rows={1}
							inputProps={{ maxLength: 140 }}
							style={{ marginBottom: 10 }}
						/>

						<Button
							variant="contained"
							color="primary"
							className={classes.buttonDelete}
							onClick={handleConfirm}
						>
							Sim
						</Button>
						<Button
							variant="contained"
							color="secondary"
							className={classes.button}
						>
							Cancelar
						</Button>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
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
		marginTop: 15,
		backgroundColor: "#F22",
		"&:hover": {
			backgroundColor: "#F00",
		},
	},
}));

export default ChangePassword;