import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";

import UserCard from "../components/UserCard/UserCard";
import apiUsuarios from "../services/api.usuarios";
import apiEquipes from "../services/api.equipes";

function ListaDeUsuarios() {
	const idUsuario = localStorage.getItem("@user-id");
	const [usuarios, setUsuarios] = useState([]);

	useEffect(() => {
		console.log(idUsuario);
		apiUsuarios
			.obterUsuarioPorId(idUsuario)
			.then((res) => {
				apiEquipes.obterEquipesPorId(res.equipe.idEquipe).then((res) => {
					setUsuarios(res.membros);
				});
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	const classes = useStyles();
	return (
		<div className={classes.card}>
			{usuarios != undefined ? (
				usuarios.map((usuario) => (
					<UserCard
						key={usuario.id}
						id={usuario.id}
						name={usuario.nome}
						status={usuario.status}
						role={usuario.cargo.nome}
						avatar={usuario.avatar}
					/>
				))
			) : (
				<h1>Time Vazio</h1>
			)}
		</div>
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
});

export default ListaDeUsuarios;
