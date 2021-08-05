import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LinearProgress from "@material-ui/core/LinearProgress";
import Divider from "@material-ui/core/Divider";

//COMPONENTS
import UserCard from "../components/UserCard/UserCard";
import DeleteTeam from "../components/Team/Delete/Delete";
import Cargos from "../components/Cargos/index";
import GoOut from "../components/Team/GoOut/GoOut";
import RemoveUser from "../components/RemoveUser/RemoveUser";
import DeleteUser from "../components/DeleteUser/DeleteUser";

//SERVICES
import apiUsuarios from "../services/api.usuarios";
import apiEquipes from "../services/api.equipes";

import useWindowDimensions from "../hooks/WindowDimension";

import imagemPadraoTime from "../assets/teampic.png";

import { UserContext } from "../context/UserContext";

export default function ListaDeUsuarios({ openModalTeam, setOpenModalTeam }) {
	const idUsuario = localStorage.getItem("@user-id");

	const context = useContext(UserContext);

	const [loading, setLoading] = React.useState(false);
	const [idEquipe, setIdEquipe] = useState("");
	const [nomeDaEquipe, setNomeDaEquipe] = useState("");
	const [corPrimaria, setCorPrimaria] = useState("");
	const [corSecundaria, setCorSecundaria] = useState("");
	const [iconeEquipe, setIconeEquipe] = useState("");
	const [usuarios, setUsuarios] = useState([]);
	const [anchorEl, setAnchorEl] = useState(null);
	const [openModal, setOpenModal] = useState(false);
	const [avatar, setAvatar] = useState(null);
	const [openModalRemove, setOpenModalRemove] = useState(false);
	const { avatarEquipe, setAvatarEquipe } = useState(false);

	const [openModalCargo, setOpenModalCargo] = useState(false);
	const [openModalDelete, setOpenModalDelete] = useState(false);

	const history = useHistory();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleTeam = () => {
		setOpenModalTeam(true);
	};

	useEffect(() => {
		apiUsuarios
			.obterUsuarioPorId(idUsuario)
			.then((res) => {
				setIdEquipe(res.equipe.idEquipe);

				apiEquipes.obterEquipesPorId(res.equipe.idEquipe).then((res) => {
					setUsuarios(res.membros);
					setNomeDaEquipe(res.nome);
					setCorPrimaria(res.cor1);
					setCorSecundaria(res.cor2);
					setIconeEquipe(res.icone);
					if (res.avatarName !== "") {
						imagemPadraoEquipe(res.avatarName);
					}
				});
				setTimeout(() => {
					setLoading(true);
				}, 1300);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	const classes = useStyles();

	const handleDelete = () => {
		setOpenModal(true);
		handleClose();
	};

	const { height, width } = useWindowDimensions();
	return (
		<>
			<div style={{ minHeight: height }}>
				{loading ? (
					<div>
						<div>
							<Paper elevation={0} className={classes.header}>
								{avatarEquipe ? (
									<img
										src={`http://alterdata-5-back-end.herokuapp.com/api/equipes/avatar/${idEquipe}`}
										style={{
											width: 100,
											height: 100,
											borderRadius: 400 / 2,
											borderStyle: "solid",
											borderColor: "#0083C1",
											borderWidth: 2,
											backgroundColor: "#F5F3F4",
										}}
									/>
								) : (
									<img
										src={imagemPadraoTime}
										style={{
											width: 100,
											height: 100,
											borderRadius: 400 / 2,
											borderStyle: "solid",
											borderColor: "#0083C1",
											borderWidth: 2,
											backgroundColor: "#F5F3F4",
										}}
									/>
								)}

								<Typography className={classes.teamName}>
									{nomeDaEquipe}
								</Typography>
								<IconButton
									aria-label="more"
									aria-controls="long-menu"
									aria-haspopup="true"
									onClick={handleClick}
								>
									<MoreVertIcon />
								</IconButton>
							</Paper>
							<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem
									onClick={() => {
										handleClose;
										history.push("editar-equipe", idEquipe);
									}}
								>
									Editar Equipe
								</MenuItem>
								<Divider style={{ marginTop: 15, marginBottom: 15 }} />
								<MenuItem onClick={handleDelete}>
									<span style={{ color: "red" }}>Apagar Equipe</span>
								</MenuItem>
								<MenuItem onClick={handleTeam}>
									<span style={{ color: "red" }}>Sair da Equipe</span>
								</MenuItem>
							</Menu>
						</div>
						<div className={classes.card}>
							{context.listaDeUsuarios != undefined ? (
								context.listaDeUsuarios.map((usuario) => (
									<UserCard
										key={usuario.id}
										id={usuario.id}
										name={usuario.nome}
										status={usuario.status}
										role={
											usuario.cargo != null ? usuario.cargo.nome : "Sem cargo"
										}
										avatar={usuario.avatarName}
										cargo={usuario.cargo}
										setOpenModalRemove={setOpenModalRemove}
										setOpenModalCargo={setOpenModalCargo}
										openModalDelete={openModalDelete}
										setOpenModalDelete={setOpenModalDelete}
										// corcargo1={usuario.cargo.cor1}
										// corcargo2={usuario.cargo.cor2}
										// cargoicone={usuario.cargo.icone}
									/>
								))
							) : (
								<h1>Time Vazio</h1>
							)}
						</div>
					</div>
				) : (
					<div>
						<LinearProgress />
						<div style={{ minHeight: height }}></div>
					</div>
				)}
			</div>
			<DeleteTeam
				idEquipe={idEquipe}
				openModal={openModal}
				setOpenModal={setOpenModal}
			/>
			<Cargos
				openModalCargo={openModalCargo}
				setOpenModalCargo={setOpenModalCargo}
			/>
			<GoOut
				openModalTeam={openModalTeam}
				setOpenModalTeam={setOpenModalTeam}
			/>
			<RemoveUser
				openModal={openModalRemove}
				setOpenModal={setOpenModalRemove}
			/>
			<DeleteUser
				openModal={openModalDelete}
				setOpenModal={setOpenModalDelete}
			/>
		</>
	);
}

const useStyles = makeStyles({
	card: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		margin: "auto",
	},
	header: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		width: 400,
		marginTop: 15,
		margin: "auto",
		borderRadius: 20,
		padding: 10,
		backgroundColor: "#00000000",
	},
	teamName: {
		marginLeft: 10,
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: "auto",
		marginTop: "auto",
	},
	teamImage: {
		height: 100,
		width: 100,
	},
});
