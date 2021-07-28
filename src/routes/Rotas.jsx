import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../pages/Login";
import Principal from "../pages/Principal";
import NavBar from "../components/NavBar/NavBar";
import ListaDeUsuarios from "../pages/ListaDeUsuarios";

export default function Rotas() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path={"/"}>
					<Principal />
				</Route>
				<Route path={"/login"}>
					<Login />
				</Route>
			</Switch>
		</Router>
	);
}
