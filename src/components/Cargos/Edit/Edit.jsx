import React, { useEffect, useState, useContext } from "react";

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

import { UserContext } from "../../../context/UserContext";

//TODO: colocar imagem e mexer no alert da imagem

import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import apiUsuarios from "../../../services/api.usuarios";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Edit({
	idCargo,
	api,
	setEditar,
	handleOpenList,
	contextApi,
	apiUsuario,
}) {
	const context = useContext(UserContext);
	const [nome, setNome] = useState("");
	const [imagem, setImagem] = useState(null);
	const [caminho, setCaminho] = useState(null);
	const [editNome, setEditNome] = useState(false);

	useEffect(() => {
		apiCargos.obterCargoPorId(idCargo).then((res) => setNome(res.nome));
	}, [idCargo]);

	const handleFile = (e) => {
		setImagem(e.target.files[0]);
		setCaminho(URL.createObjectURL(e.target.files[0]));
	};

	const handleEdit = () => {
		const formData = new FormData();
		if (imagem !== null) {
			formData.append("img", imagem);
			apiCargos.alterarAvatar(idCargo, formData).then((res) => {
				api();
				contextApi();
			});
		}

		if (nome.length !== 0) {
			const novo = {
				nome,
			};
			apiCargos.atualizarCargo(idCargo, novo).then((res) => {
				res.status === 200 ? setOpenAlert(true) : setOpenAlertError(true);
				api();
				contextApi();
			});
		}
		api();
		apiUsuario();
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

	const openInput = () => {
		setEditNome(true);
	};

	const handleClickAway = () => {
		if (nome.length === 0) setEditNome(false);
	};

	const classes = useStyles();
	return (
		<Card elevation={0}>
			<Snackbar
				open={openAlert}
				autoHideDuration={3000}
				onClose={handleCloseAlert}
			>
				<Alert onClose={handleCloseAlert} severity="success">
					Cargo atualizado com sucesso!!!
				</Alert>
			</Snackbar>
			<Snackbar
				open={openAlertError}
				autoHideDuration={4000}
				onClose={handleCloseAlertError}
			>
				<Alert onClose={handleCloseAlertError} severity="error">
					Houve algum erro ao atualizar cargo.
				</Alert>
			</Snackbar>
			<div className={classes.paper}>
				<ClickAwayListener
					mouseEvent="onMouseDown"
					touchEvent="onTouchStart"
					onClickAway={handleClickAway}
				>
					{editNome ? (
						<TextField
							required
							id="filled-required"
							label="Nome (MAX. 20)"
							defaultValue=""
							variant="filled"
							type="text"
							inputProps={{ maxLength: 20 }}
							style={{ width: 300 }}
							onChange={(e) => {
								setNome(e.target.value);
							}}
							value={nome}
						/>
					) : (
						<Typography className={classes.center}>
							<Button onClick={openInput}>
								{nome}
								<Grid item xs={4}>
									<Typography>
										<EditIcon />
									</Typography>
								</Grid>
							</Button>
						</Typography>
					)}
				</ClickAwayListener>
				<div>
					{imagem !== null ? (
						<div className={classes.center}>
							<img
								src={caminho}
								style={{
									width: 100,
									height: 100,
									borderRadius: 400 / 2,
									borderStyle: "solid",
									borderColor: "#0083C1",
									borderWidth: 5,
									backgroundColor: "#F5F3F4",
									marginLeft: "auto",
									marginRight: "auto",
								}}
							/>
						</div>
					) : (
						<div className={classes.center}>
							<img
								src={`http://alterdata-5-back-end.herokuapp.com/api/cargos/avatar/${idCargo}`}
								style={{
									width: 100,
									height: 100,
									borderRadius: 400 / 2,
									borderStyle: "solid",
									borderColor: "#0083C1",
									borderWidth: 5,
									backgroundColor: "#F5F3F4",
								}}
							/>
						</div>
					)}
				</div>

				<Input type="file" onChange={handleFile} />
				<div className={classes.buttons}>
					<Button
						className={classes.button}
						variant="contained"
						color="primary"
						onClick={handleEdit}
					>
						Salvar
					</Button>
					<Button
						className={classes.button}
						variant="contained"
						color="secondary"
						onClick={() => {
							setEditar(false);
							handleOpenList();
						}}
					>
						Cancelar
					</Button>
				</div>
			</div>
		</Card>
	);
}

export default Edit;

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		marginLeft: "auto",
		marginRight: "auto",
		justifyContent: "center",
	},
	button: {
		margin: 5,
	},
	buttons: {
		margin: 5,
		textAlign: "center",
	},
	center: {
		display: "flex",
		justifyContent: "center",
	},
}));
