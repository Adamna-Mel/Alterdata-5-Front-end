import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

//COMPONENTS
import TeamCard from "../components/TeamCard/TeamCard";
import NewTeam from "../components/Team/Create/Create";
import Robo from "../components/Robo/Robo";
import Pagination from "../components/Pagination/Pagination";

//SERVICES
import api from "../services/api.equipes";
import apiUsuarios from "../services/api.usuarios";

import { UserContext } from "../context/UserContext";

import useWindowDimensions from "../hooks/WindowDimension";

function ListaDeEquipes() {
	const [loading, setLoading] = React.useState(false);
	const [equipes, setEquipes] = React.useState([]);
	const [openModal, setOpenModal] = React.useState(false);

	const context = useContext(UserContext);

	const history = useHistory();

	React.useEffect(() => {
		api.obterEquipes().then((res) => {
			setEquipes(res);
		});
		setTimeout(() => {
			setLoading(true);
		}, 1300);
	}, []);

	const handleCreate = () => {
		setOpenModal(true);
	};

	const classes = useStyles();

	const { height, width } = useWindowDimensions();

	return (
		<>
			<div>
				{loading ? (
					<div style={{ minHeight: height }}>
						<Card elevation={0} className={classes.header}>
							<CardContent style={{ justifyContent: "center" }}>
								<Typography className={classes.titulo}>
									Escolha uma equipe para entrar
								</Typography>
								<Typography className={classes.titulo}>
									ou{" "}
									<Fab
										variant="extended"
										color="primary"
										aria-label="add"
										onClick={handleCreate}
									>
										<DoubleArrowIcon />
										CRIE SUA PRÓPRIA EQUIPE
									</Fab>
								</Typography>
							</CardContent>
						</Card>
						<div className={classes.card}>
							{context.listaDeEquipes.map((e) => (
								<div key={e.id}>
									<TeamCard
										key={e.id}
										id={e.idEquipe}
										name={e.nome}
										avatar={e.avatar}
									/>

									{/* <button onClick={() => apiUsuarios.editarTime(id, e.idEquipe)}>
							Entrar
						</button> */}
								</div>
							))}
						</div>
					</div>
				) : (
					<div>
						<LinearProgress />
						<div style={{ minHeight: height }}></div>
					</div>
				)}
			</div>
			<NewTeam openModal={openModal} setOpenModal={setOpenModal} />
			<Pagination setSize={context.setSize} setPage={context.setPage} />
			<Robo/>
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
	titulo: {
		marginLeft: 10,
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: "auto",
		marginTop: "auto",
	},
	header: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		maxWidth: 600,
		marginTop: 15,
		margin: "auto",
		borderRadius: 20,
		padding: 10,
		backgroundColor: "#00000000",
	},
});

export default ListaDeEquipes;
