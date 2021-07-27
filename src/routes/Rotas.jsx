import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../pages/Login";
import Principal from "../pages/Principal";

import auth from "../services/auth";

export default function Rotas() {
	return (
		<Router>
			<Switch>
				{auth.isAuthenticated ? (
					<Route path={"/login"}>
						<Login />
					</Route>
				) : (
					<Route path={"/"}>
						<Principal />
					</Route>
				)}

				<Route path={"/"}>
					<Principal />
				</Route>
			</Switch>
		</Router>
	);
}
