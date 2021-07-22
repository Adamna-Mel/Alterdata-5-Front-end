import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import "./App.css";
import UserCard from "./components/UserCard";
import TeamTitle from "./components/TeamTitle";
import Nav from "./components/Nav";

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

function App() {
	const classes = useStyles();
	return <Nav />;
}

export default App;
