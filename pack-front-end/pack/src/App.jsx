import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import "./App.css";

import Rotas from "./router/Rotas";

const useStyles = makeStyles({
	card: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
	},
	app: {
		flex: 1,
		display: "flex",
		alignSelf: "center",
		backgroundColor: "#f5f3f4",
		padding: 20,
		alignItems: "center",
	},
});

function App() {
	const classes = useStyles();
	return (
		<div className={classes.app}>
			<header className="App-header">
				<Rotas />
			</header>
		</div>
	);
}

export default App;
