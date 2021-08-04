import React, { useEffect, useState } from "react";

import apiCargos from "../../../services/api.cargos";

import {
	Typography,
	Button,
	makeStyles,
	TextField,
	Input,
	Grid,
	ClickAwayListener,
	Card,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Delete({ idCargo, api, setApagar, setAssign, handleOpenList }) {
	const [nome, setNome] = useState("");
	useEffect(() => {
		apiCargos.obterCargoPorId(idCargo).then((res) => setNome(res.nome));
	}, [idCargo]);

	const handleDelete = () => {
		apiCargos.apagarCargo(idCargo).then((res) => {
			if (res.status === 200) {
				setOpenAlert(true);
				api();
				setApagar(false);
			} else {
				setOpenAlertError(true);
			}
		});
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
		<Card elevation={0} className={classes.card}>
			<Snackbar
				open={openAlert}
				autoHideDuration={3000}
				onClose={handleCloseAlert}
			>
				<Alert onClose={handleCloseAlert} severity="success">
					Cargo apagado com sucesso!!!
				</Alert>
			</Snackbar>
			<Snackbar
				open={openAlertError}
				autoHideDuration={4000}
				onClose={handleCloseAlertError}
			>
				<Alert onClose={handleCloseAlertError} severity="error">
					Houve algum erro ao apagado cargo.
				</Alert>
			</Snackbar>
			<Typography className={classes.txt}>
				Apagar permanentemente o cargo {nome}?
			</Typography>
			<div className={classes.buttons}>
				<Button
					className={classes.buttonDelete}
					variant="contained"
					color="primary"
					onClick={handleDelete}
				>
					Sim
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						setApagar(false);
						handleOpenList();
					}}
				>
					Cancelar
				</Button>
			</div>
		</Card>
	);
}

export default Delete;

const useStyles = makeStyles((theme) => ({
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	txt: {
		marginTop: "20%",
		fontSize: "2rem",
	},

	buttons: {
		display: "flex",

		justifyContent: "space-around",
		marginTop: "25%",
	},
	buttonDelete: {
		backgroundColor: "red",
		"&:hover": {
			backgroundColor: "#F12",
		},
	},
}));
