import React from "react";
import {
	Grid,
	Paper,
	TextField,
	Button,
	Typography,
	makeStyles,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import axios from "axios";

import apiUsuarios from "../../services/api.usuarios";

import useWindowDimensions from "../../hooks/WindowDimension";
import { useHistory } from "react-router-dom";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ForgotPassword() {
	const [email, setEmail] = React.useState("");
	const history = useHistory();

	const papercss = {
		padding: "25px 20px",
		width: 400,
		margin: "30px auto",
		borderRadius: 20,
	};

	const handleClick = (e) => {
		e.preventDefault();

		let formData = new FormData();

		formData.append("email", email);

		apiUsuarios
			.esqueciSenha(formData)
			.then((res) =>
				(res.status === 201 || res.status === 200 ) ? setOpenAlert(true) : setOpenAlertError(true)
			);
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

	const { height, width } = useWindowDimensions();

	const classes = useStyles();

	return (
		<div style={{ height: height, marginTop: 100 }}>
			<Snackbar
				open={openAlert}
				autoHideDuration={3000}
				onClose={handleCloseAlert}
			>
				<Alert onClose={handleCloseAlert} severity="success">
					Email enviado com sucesso!!!
				</Alert>
			</Snackbar>
			<Snackbar
				open={openAlertError}
				autoHideDuration={4000}
				onClose={handleCloseAlertError}
			>
				<Alert onClose={handleCloseAlertError} severity="error">
					Houve algum erro ao cadastrar o usuário.
				</Alert>
			</Snackbar>
			<Grid>
			<Paper elevation={7} style={papercss}>
				<Grid align="center">
					<Typography style={{ fontSize: 30 }}>Recuperar senha</Typography>
					</Grid>
					<form>
						<TextField
							variant="outlined"
							fullWidth
							label="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							style={{ marginBottom: 10 }}
						/>
						
						<div style={{ marginTop: 10 }} className={classes.botoes}>
							<Button
								type="submit"
								color="primary"
								variant="contained"
								onClick={handleClick}
							>
								Enviar
							</Button>
							<Button
								variant="contained"
								color="secondary"
								style={{ marginLeft: "50%" }}
								onClick={() => history.push("/")}
							>
								Voltar
							</Button>
						</div>
					</form>
				</Paper>
			</Grid>
		</div>
	);
}

export default ForgotPassword;

const useStyles = makeStyles({
	botoes: {
		display: "flex",
		justifyContent: "space-around",
		width: "100%",
	},
});
