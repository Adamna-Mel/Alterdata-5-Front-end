import React, { useEffect, useState, useContext } from "react";

import {
	Button,
	Fade,
	Backdrop,
	Modal,
	makeStyles,
	Grid,
	MenuItem,
	Menu,
	Typography,
	Card,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import apiCargos from "../../../services/api.cargos";

import Delete from "../Delete/Delete";
import Edit from "../Edit/Edit";
import Assign from "../Assign/Assign";
import Pagination from "../../Pagination/Pagination";

import apiUsuarios from "../../../services/api.usuarios";

import { UserContext } from "../../../context/UserContext";

function List({ lista, setLista, api, setSize, setPage, page, contextApi }) {
	const context = useContext(UserContext);
	const [anchorEl, setAnchorEl] = useState(null);
	const [cargo, setCargo] = useState("Cargos");
	const [editar, setEditar] = useState(false);
	const [apagar, setApagar] = useState(false);
	const [assign, setAssign] = useState(false);
	const [idCargo, setIdCargo] = useState(null);
	const [list, setList] = useState(true);

	const handleOpenEditar = () => {
		setEditar(true);
		setApagar(false);
		setAssign(false);
		setList(false);
	};

	const handleOpenApagar = () => {
		setEditar(false);
		setApagar(true);
		setAssign(false);
		setList(false);
	};

	const handleOpenAssign = () => {
		setAssign(true);
		setEditar(false);
		setApagar(false);
		setList(false);
	};

	const handleOpenList = () => {
		setAssign(false);
		setEditar(false);
		setApagar(false);
		setList(true);
	};

	useEffect(() => {
		api();
	}, [page]);

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClickMenuItem = (idCargo, cargo) => {
		handleClose();
		setIdCargo(idCargo);
		setCargo(cargo);
	};

	const classes = useStyles();

	return (
		<div style={{ padding: "10px" }}>
			<Card elevation={0}>
				{list ? (
					lista.map((c) => {
						return (
							<div
								className={classes.menuItem}
								onClick={() => handleClickMenuItem(c.idCargo, c.nome)}
							>
								<Typography onClick={handleOpenAssign}>{c.nome}</Typography>
								<div className={classes.menuButtons}>
									<Button
										onClick={() => {
											handleOpenEditar();
											setIdCargo(c.idCargo);
											setCargo(c.nome);
										}}
									>
										<Grid item xs={4}>
											<Typography>
												<EditIcon fontSize="small" />
											</Typography>
										</Grid>
									</Button>
									<Button
										onClick={() => {
											handleOpenApagar();
											setIdCargo(c.idCargo);
											setCargo(c.nome);
										}}
									>
										<Grid item xs={4}>
											<Typography>
												<DeleteForeverIcon fontSize="small" />
											</Typography>
										</Grid>
									</Button>
								</div>
							</div>
						);
					})
				) : (
					<Button onClick={handleOpenList}>Cargos</Button>
				)}

				{apagar ? (
					<Delete
						idCargo={idCargo}
						api={api}
						setAssign={setAssign}
						setApagar={setApagar}
						handleOpenList={handleOpenList}
						contextApi={contextApi}
					/>
				) : null}

				{editar ? (
					<Edit
						idCargo={idCargo}
						api={api}
						setAssign={setAssign}
						setEditar={setEditar}
						handleOpenList={handleOpenList}
						contextApi={contextApi}
					/>
				) : null}

				{assign ? (
					<Assign
						setApagar={setApagar}
						setEditar={setEditar}
						handleOpenList={handleOpenList}
						idCargo={idCargo}
						contextApi={contextApi}
					/>
				) : null}
			</Card>
			<Pagination
				className={classes.pag}
				setSize={setSize}
				setPage={setPage}
				page={page}
			/>
		</div>
	);
}

export default List;

const useStyles = makeStyles((theme) => ({
	menuItem: {
		display: "flex",
		justifyContent: "space-between",
		padding: "0px 5px",
		borderRadius: 10,
		verticalAlign: "center",
		cursor: "pointer",
	},
	pag: {
		border: "1px solid red",
		bottom: 0,
	},
}));

const papercss = {
	padding: "25px 20px",
	width: 400,
	margin: "30px auto",
	borderRadius: 20,
};
