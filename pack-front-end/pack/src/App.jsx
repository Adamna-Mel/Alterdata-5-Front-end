import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import "./App.css";
import UserCard from "./components/UserCard";
import TeamTitle from "./components/TeamTitle";
import Nav from "./components/Nav";
import Time from "./routers/Rotas";

import RotasEquipe from "./routers/RotasTime";
import RotasCargos from "./routers/RotasCargo";
import Rotas from "./routers/Rotas";

import RotasPrincipais from "./routers/RotasPrincipais";

function App() {
	const classes = useStyles();
	return <Nav />;
}

export default App;

const useStyles = makeStyles({
	card: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		alignSelf: "center",
		margin: "auto",
	},
	app: {
		backgroundColor: "#f5f3f4",
		padding: 20,
	},
	header: {
		textAlign: "center",
		bottomMargin: 10,
	},
	teamName: {
		alignSelf: "center",
	},
});
