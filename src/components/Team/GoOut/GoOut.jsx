import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import {
	Typography,
	Button,
	Fade,
	Backdrop,
	Modal,
	Card,
} from "@material-ui/core";

import apiUsuarios from "../../../services/api.usuarios";

function GoOut({ openModalTeam, setOpenModalTeam }) {
	const idUsuario = localStorage.getItem("@user-id");
	const [equipe, setEquipe] = useState("");
	const [, setIdEquipe] = useState();
	const history = useHistory();

	useEffect(() => {
		apiUsuarios.obterUsuarioPorId(idUsuario).then((res) => {
			setEquipe(res.equipe.nome);
			setIdEquipe(res.equipe.idEquipe);
		});
	}, []);

	const classes = useStyles();

	const handleClose = () => {
		setOpenModalTeam(false);
	};

	const handleGoOut = () => {
		apiUsuarios.sairDaEquipe(idUsuario).then(() => {
			history.go("/");
		});
	};

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={openModalTeam}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={openModalTeam}>
					<div
						className={classes.paper}
						style={{
							alignSelf: "center",
							flexDirection: "column",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Card elevation={0}>
							<Typography> Sair da equipe {equipe}?</Typography>
						</Card>
						<Button
							onClick={handleGoOut}
							variant="contained"
							color="primary"
							className={classes.buttonDelete}
						>
							Sim
						</Button>
						<Button
							onClick={handleClose}
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
export default GoOut;
