import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import { Typography, Button, Fade, Backdrop, Modal } from "@material-ui/core";
import apiUsuarios from "../../services/api.usuarios";
import { UserContext } from "../../context/UserContext";

function RemoveUser({ openModal, setOpenModal }) {
	const context = useContext(UserContext);

	const [usuario, setUsuario] = React.useState("");

	React.useEffect(() => {
		apiUsuarios
			.obterUsuarioPorId(context.usuarioAtual)
			.then((res) => setUsuario(res.nome));
	}, [context.usuarioAtual]);

	const classes = useStyles();

	const handleClose = () => {
		setOpenModal(false);
	};

	const handleRemove = () => {
		apiUsuarios.sairDaEquipe(context.usuarioAtual);
		context.api();
		handleClose();
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
						<Typography>Remover {usuario} da equipe?</Typography>
						<Button
							// style={{  }}
							onClick={handleRemove}
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
export default RemoveUser;
