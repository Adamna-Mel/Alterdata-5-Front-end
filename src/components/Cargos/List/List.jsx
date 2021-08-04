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

import apiUsuarios from "../../../services/api.usuarios";

import { UserContext } from "../../../context/UserContext";

function List({ lista, setLista, api }) {
	const context = useContext(UserContext);
	const [anchorEl, setAnchorEl] = useState(null);
	const [cargo, setCargo] = useState("Cargos");
	const [editar, setEditar] = useState(false);
	const [apagar, setApagar] = useState(false);
	const [assign, setAssign] = useState(false);
	const [idCargo, setIdCargo] = useState(null);

	const handleOpenEditar = () => {
		setEditar(true);
		setApagar(false);
		setAssign(false);
	};

	const handleOpenApagar = () => {
		setEditar(false);
		setApagar(true);
		setAssign(false);
	};

	const handleOpenAssign = () => {
		setAssign(true);
		setEditar(false);
		setApagar(false);
	};

	useEffect(() => {
		api();
	}, []);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

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
				<Button
					aria-controls="simple-menu"
					aria-haspopup="true"
					onClick={handleClick}
				>
					{cargo}
				</Button>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					{lista.map((c) => {
						return (
							<MenuItem
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
							</MenuItem>
						);
					})}
				</Menu>

				{apagar ? (
					<Delete
						idCargo={idCargo}
						api={api}
						setAssign={setAssign}
						setApagar={setApagar}
					/>
				) : null}

				{editar ? (
					<Edit
						idCargo={idCargo}
						api={api}
						setAssign={setAssign}
						setEditar={setEditar}
					/>
				) : null}

				{assign ? (
					<Assign
						setApagar={setApagar}
						setEditar={setEditar}
						idCargo={idCargo}
					/>
				) : null}
			</Card>
		</div>
	);
}

export default List;

const useStyles = makeStyles((theme) => ({
	menuItem: {
		display: "flex",
		justifyContent: "space-between",
	},
}));

const papercss = {
	padding: "25px 20px",
	width: 400,
	margin: "30px auto",
	borderRadius: 20,
};
